using MySalonMostWeb.Classes;
using MySql.Data.MySqlClient;

namespace MySalonMostWeb;

public static class Database {

    // vlastnosti
    #if RELEASE || TESTING
        private static string DatabaseIP => "localhost";
    #else
        private static string? DatabaseIP => Program.ENV.GetValueOrNull("DATABASE_IP");
    #endif

    private const int MaxPoolSize = 300;

    [Obsolete("Use GetConnection() instead.")]
    public static MySqlConnection? Connection => GetConnection();





    // metody
    public static MySqlConnection? GetConnection() {
        MySqlConnection? conn = null;

        try {
            conn = new MySqlConnection(
                $"server={DatabaseIP};userid=mysalonmost;password={Program.ENV["DATABASE_MYSALONMOST_PASSWORD"]};database=mysalonmost;pooling=true;Max Pool Size={MaxPoolSize};");
            conn.Open();
        } catch (Exception e) {
            conn?.Close();

            Program.Logger.Log(LogLevel.Error, e, "Database connection error.");
            return null;
        }

        return conn;
    }
}