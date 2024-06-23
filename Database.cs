
using dotenv.net;
using MySql.Data.MySqlClient;

namespace MySalonMostWeb;

public static class Database {


    public static MySqlConnection? Connection {
        get {
            MySqlConnection? conn = null;

            try {
                conn = new MySqlConnection(
                    $"server={DotEnv.Read()["DATABASE_IP"]};userid=mysalonmost;password={DotEnv.Read()["DATABASE_MYSALONMOST_PASSWORD"]};database=mysalonmost;pooling=false");
                conn.Open();
            } catch { return null; }

            return conn;
        }
    }
}