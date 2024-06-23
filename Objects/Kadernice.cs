using MySql.Data.MySqlClient;

namespace MySalonMostWeb.Objects;

public sealed class Kadernice {
    private Kadernice(string uuid, string name, string? description, List<string>? info, string? avatar) {
        UUID = uuid;
        Name = name;
        Description = description;
        Info = info;
        Avatar = avatar;
    }

    public string UUID { get; private set; }
    public string Name { get; private set; }
    public string? Description { get; private set; }
    public List<string>? Info { get; private set; }
    public string? Avatar { get; private set; }


    public static Kadernice? Get(string uuid) {
        return null;
    }

    public static List<Kadernice> GetAll() {
        using var conn = Database.Connection;
        if (conn == null) return new List<Kadernice>();

        using var cmd = new MySqlCommand("SELECT * FROM kadernice", conn);
        using var reader = cmd.ExecuteReader();

        if (!reader.HasRows) return new List<Kadernice>();



        var kadernice = new List<Kadernice>();

        while (reader.Read()) {
            string uuid = reader.GetString(reader.GetOrdinal("uuid")); // Název sloupce "uuid"
            string name = reader.GetString(reader.GetOrdinal("name")); // Název sloupce "name"
            string? description = reader.IsDBNull(reader.GetOrdinal("description")) ? null : reader.GetString(reader.GetOrdinal("description")); // Název sloupce "description"
            List<string>? info = reader.IsDBNull(reader.GetOrdinal("info")) ? null : reader.GetString(reader.GetOrdinal("info")).Split(";;").ToList(); // Název sloupce "info"
            string? avatar = reader.IsDBNull(reader.GetOrdinal("avatar")) ? null : reader.GetString(reader.GetOrdinal("avatar")); // Název sloupce "avatar"

            kadernice.Add(new Kadernice(uuid, name, description, info, avatar));
        }

        return kadernice;
    }
}