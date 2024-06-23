
using dotenv.net;
using MySql.Data.MySqlClient;

namespace MySalonMostWeb;

public static class Database {


    public static MySqlConnection? Connection {
        get {
            MySqlConnection? conn = null;

            try {
                conn = new MySqlConnection(
                    $"server={Program.Env["DATABASE_IP"]};userid=mysalonmost;password={Program.Env["DATABASE_MYSALONMOST_PASSWORD"]};database=mysalonmost;pooling=false");
                conn.Open();
            } catch (Exception e) {
                conn?.Close();

                Program.Logger.Log(LogLevel.Error, e, "Database connection error.");
                return null;
            }

            return conn;
        }
    }
}