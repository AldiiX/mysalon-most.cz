global using HCS = MySalonMostWeb.Services.HttpContextService;
using System.Net;
using dotenv.net;
using MySalonMostWeb.Classes;
using MySalonMostWeb.Middlewares;
using StackExchange.Redis;

namespace MySalonMostWeb;



public static class Program {

    public static WebApplication App { get; private set; } = null!;
    public static IDictionary<string, string> ENV { get; private set; } = null!;
    public static ILogger Logger => App.Logger;


    #if DEBUG || TESTING
        public const bool DEVELOPMENT_MODE = true;
    #else
        public const bool DEVELOPMENT_MODE = false;
    #endif




    public static void Main(string[] args) {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllersWithViews();
        builder.Services.AddHttpContextAccessor();
        builder.Services.AddControllersWithViews();
        /*builder.Services.AddStackExchangeRedisCache(options => {
            if (DEVELOPMENT_MODE) {
                options.ConfigurationOptions = new ConfigurationOptions {
                    EndPoints = { $"{ENV["DATABASE_IP"]}:63790" },
                    Password = ENV["REDIS_PUBLICACC_PASSWORD"],
                };
            } else options.Configuration = "localhost:6379";

            options.InstanceName = "MySalonMostSession";
        });
        builder.Services.AddSession(options => {
            options.IdleTimeout = TimeSpan.FromDays(365);
            options.Cookie.HttpOnly = true;
            options.Cookie.IsEssential = true;

            options.Cookie.MaxAge = TimeSpan.FromDays(365); // Trvání cookie na 365 dní
            //options.Cookie.Expiration = TimeSpan.FromDays(365);
            options.Cookie.Name = "mysalonmost_session";
        });*/

        builder.Configuration
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

        #if DEBUG
                builder.Configuration.AddJsonFile("appsettings.Debug.json", optional: true, reloadOnChange: true);
        #elif RELEASE
                builder.Configuration.AddJsonFile("appsettings.Release.json", optional: true, reloadOnChange: true);
        #elif TESTING
                builder.Configuration.AddJsonFile("appsettings.Testing.json", optional: true, reloadOnChange: true);
        #endif

        builder.Configuration.AddEnvironmentVariables();

        App = builder.Build();
        ENV = DotEnv.Read();



        // Konfigurace HttpContextService
        var httpContextAccessor = App.Services.GetRequiredService<IHttpContextAccessor>();
        HCS.Configure(httpContextAccessor);



        // Configure the HTTP request pipeline.
        if (!App.Environment.IsDevelopment()) {
            App.UseExceptionHandler("/error");
            App.UseStatusCodePagesWithReExecute("/error/{0}");
            App.UseHsts();
        }

        App.UseHttpsRedirection();
        App.UseStaticFiles();
        //App.UseSession();
        App.UseRouting();
        App.UseAuthorization();
        App.UseMiddleware<ErrorHandlingMiddleware>();

        App.MapControllerRoute(name: "default", pattern: "/");

        /*App.Use(async (context, next) => {
            await next();

            // Pokud není nalezena žádná odpovídající cesta
            if (context.Response is { StatusCode: 404, HasStarted: false }) context.Response.Redirect("/");
        });*/

        // Spuštění aplikace
        App.Run();
    }
}