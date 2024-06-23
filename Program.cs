using dotenv.net;

namespace MySalonMostWeb;



public static class Program {

    public static WebApplication App { get; private set; } = null!;
    public static IDictionary<string, string> Env { get; private set; } = null!;
    public static ILogger Logger => App.Logger;

    public static void Main(string[] args) {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllersWithViews();

        App = builder.Build();
        Env = DotEnv.Read();

        // Configure the HTTP request pipeline.
        if (!App.Environment.IsDevelopment()) {
            App.UseExceptionHandler("/error");
            App.UseStatusCodePagesWithReExecute("/error/{0}");
            App.UseHsts();
        }

        App.UseHttpsRedirection();
        App.UseStaticFiles();

        App.UseRouting();
        App.UseAuthorization();

        App.MapControllerRoute(name: "default", pattern: "/");

        App.Use(async (context, next) => {
            await next();

            // Pokud není nalezena žádná odpovídající cesta
            if (context.Response is { StatusCode: 404, HasStarted: false }) context.Response.Redirect("/");
        });

        // Spuštění aplikace
        App.Run();
    }
}