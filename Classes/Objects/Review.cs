using System.Text.Json.Serialization;
using MySql.Data.MySqlClient;

namespace MySalonMostWeb.Classes.Objects;





[Serializable]
[method: JsonConstructor]
public class Review(int id, Review.ReviewAuthor author, string text, short stars, DateTime createdAt) {

    [Serializable]
    [method: JsonConstructor]
    public class ReviewAuthor(string name, string email, string? avatar = null, string? ip = null) {
        public string Name { get; private set; } = name;
        public string Email { get; private set; } = email;
        public string? Avatar { get; private set; } = avatar;
        public string? IP { get; private set; } = ip;
    }

    public int Id { get; private set; } = id;
    public ReviewAuthor Author { get; private set; } = author;
    public string Text { get; private set; } = text;
    public short Stars { get; private set; } = stars;
    public DateTime CreatedAt { get; private set; } = createdAt;


    public static async Task<List<Review>> GetAllAsync() {
        var reviews = new List<Review>();

        await using var conn = await Database.GetConnectionAsync();
        if (conn == null) return reviews;

        await using var cmd = new MySqlCommand("SELECT * FROM reviews ORDER BY created_at DESC, stars ASC", conn);
        await using var reader = await cmd.ExecuteReaderAsync() as MySqlDataReader;
        if(reader == null) return reviews;

        while (await reader.ReadAsync()) {
            var author = new ReviewAuthor(
                reader.GetString("author_name"),
                reader.GetString("author_email"),
                reader.GetValueOrNull<string>("author_avatar"),
                reader.GetValueOrNull<string>("author_ip")
            );

            reviews.Add(new Review(
                reader.GetInt32("id"),
                author,
                reader.GetString("text"),
                reader.GetInt16("stars"),
                reader.GetDateTime("created_at")
            ));
        }

        // sortnutí tak, aby bylo seřazený podle počtu hvězdiček (od největšího čísla k nejmenšímu) a v případě shody podle data vytvoření
        reviews.Sort((a, b) => {
            if (a.Stars == b.Stars) return b.CreatedAt.CompareTo(a.CreatedAt);
            return b.Stars.CompareTo(a.Stars);
        });

        return reviews;
    }

    public static List<Review> GetAll() => GetAllAsync().Result;
}