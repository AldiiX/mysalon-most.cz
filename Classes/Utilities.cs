using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using MySql.Data.MySqlClient;

namespace MySalonMostWeb.Classes;





public static class Utilities {



    public static class Cookie {
        public static void Set(in string key, in string? value, in bool saveToTemp = true) {
            if (saveToTemp && HCS.Current.Items["tempcookie_" + key] != null) return;

            HCS.Current.Items["tempcookie_" + key] = value;
            HCS.Current.Response.Cookies.Append(key, value ?? "null");
        }

        public static string? Get(in string key) => HCS.Current.Request.Cookies[key];

        public static bool Exists(in string key) => HCS.Current.Request.Cookies.ContainsKey(key);

        public static void Delete(in string key) => HCS.Current.Response.Cookies.Delete(key);
    }

    public static class WebTheme {
        public static void Set(in string theme) => Cookie.Set("webtheme", theme);

        public static string Get() {
            var wt = Cookie.Get("webtheme");
            if(wt == null) Cookie.Set("webtheme", "light");

            return wt ?? "light";
        }

        public static string GetCSSFile() => Get() == "light" ? "/styles/themes/light.css" : "/styles/themes/dark.css";
    }

    public sealed class WebLanguage {
        public static readonly WebLanguage CZ = new() { Code = "cz" };
        public static readonly WebLanguage EN = new() { Code = "en" };



        private WebLanguage() { }
        public string Code { get; private set; } = "en";


        public static WebLanguage Get() {
            var language = Cookie.Get("weblanguage");
            if(language == null) Cookie.Set("weblanguage", "en");

            return language switch {
                "cz" => CZ,
                "en" => EN,
                _ => EN
            };
        }

        public static void Set(in string language) => Cookie.Set("weblanguage", language);
    }

    public sealed class Translator {
        public Translator(IDictionary<string, Dictionary<WebLanguage, string>> dictionary, WebLanguage? language = null) {
            this.dictionary = dictionary;
            this.lang = language ?? WebLanguage.Get();
        }

        public string? this[string key] => dictionary.GetValueOrNull(key)?.GetValueOrNull(lang) ?? null;

        private IDictionary<string, Dictionary<WebLanguage, string>> dictionary;
        private WebLanguage lang;
    }

    public static class HTML {
        /// <summary>
        ///     Metoda, která validuje, zda cesta (href) je stejná jako aktuální cesta, aby se zabránilo zbytečnému přesměrování na stejnou stránku.
        /// </summary>
        /// <param name="href">například /app/account</param>
        /// <returns>Pokud je <paramref name="href"/> stejný jako aktuální cesta, vrátí <c>null</c>, jinak vrátí původní parametr <paramref name="href"/> </returns>
        public static string? SaveHref(in string href) {
            var path = HCS.Current.Request.Path.Value;

            if (path == null) return href;

            return path.Equals(href) ? null : href;
        }

        public static string? SetClassIfHrefIsCurrentPage(string href, string className = "active") {
            var path = HCS.Current.Request.Path.Value;

            if (path == null) return null;

            return path.Equals(href) ? className : null;
        }

        public static string? SetClassIfHrefStartsWithString(string s, string className = "active") {
            var path = HCS.Current.Request.Path.Value;
            if (path == null) return null;

            return path.Trim().StartsWith(s) || path.Trim().Equals(s) ? className : null;
        }
    }



    #region Rozšiřující metody

        public static Value? GetValueOrNull<Key, Value>(this IDictionary<Key, Value> dictionary, in Key? key) where Value : class? {
            if (key == null) return null;
            return dictionary.TryGetValue(key, out var value) ? value : null;
        }

        public static void SetObject<T>(this ISession session, in string key, in T value) {
            session.SetString(key, JsonSerializer.Serialize(value));
        }

        public static T? GetObject<T>(this ISession session, in string key) where T : class? {
            var value = session.GetString(key);
            return value == null ? null : JsonSerializer.Deserialize<T>(value);
        }

        public static T? GetObject<T>(this ISession session, string key) where T : struct {
            var value = session.GetString(key);
            return value == null ? (T?)null : JsonSerializer.Deserialize<T>(value);
        }

        public static T? GetValueOrNull<T>(this MySqlDataReader r, in string columnName) where T : class? {
            try {
                return r.IsDBNull(r.GetOrdinal(columnName)) ? null : r.GetValue(r.GetOrdinal(columnName)) as T;
            } catch {
                return null;
            }
        }

        public static void Terminate(this ISession session) {
            session.Clear();
            HCS.Current.Response.Cookies.Delete(".AspNetCore.Session");
            session.CommitAsync().Wait();
        }

        public static EnumType? ParseEnumOrNull<EnumType>(in string? value) where EnumType : struct {
            if (value == null) return null;

            try {
                return Enum.Parse<EnumType>(value);
            } catch {
                return null;
            }
        }

        public static bool IsNullOrEmpty(this string? s) => string.IsNullOrEmpty(s);
    #endregion

    #region Ostatní metody

        public static string GenerateUUID() => Guid.NewGuid().ToString();

        private static string EncryptWithSHA512(in string password) {
            using SHA512 sha512 = SHA512.Create();
            byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
            byte[] sha512HashBytes = sha512.ComputeHash(passwordBytes);
            StringBuilder sb = new StringBuilder();
            foreach (byte b in sha512HashBytes) {
                sb.Append(b.ToString("x2"));
            }
            return sb.ToString();
        }

        private static string EncryptWithMD5(in string password) {
            using MD5 md5 = MD5.Create();
            byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
            byte[] md5HashBytes = md5.ComputeHash(passwordBytes);
            StringBuilder sb = new StringBuilder();
            foreach (byte b in md5HashBytes) {
                sb.Append(b.ToString("x2"));
            }


            return sb.ToString();
        }

        public static string EncryptPassword(in string password) => EncryptWithSHA512(password) + EncryptWithMD5(password[0] + password[2] + "");
    #endregion
}