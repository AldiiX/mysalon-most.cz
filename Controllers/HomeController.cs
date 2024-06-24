using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MySalonMostWeb.Models;

namespace MySalonMostWeb.Controllers;

public class HomeController : Controller {



    [Route("/")]
    public IActionResult Index() {

        var model = new {
            MobileNumber = "+420 476 108 686",
            Year = DateTime.Now.Year,
            CacheVersion = "23-06-2024-1",
        };

        return View("/Views/Index.cshtml", model);
    }

    [Route("/index"), Route("/home")]
    public IActionResult RedirectToIndex() {
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error() {
        return View("/Views/Error.cshtml", new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}