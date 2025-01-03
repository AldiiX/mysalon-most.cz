using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MySalonMostWeb.Classes;
using MySalonMostWeb.Models;

namespace MySalonMostWeb.Controllers;





public class HomeController : Controller {

    [HttpGet("/")]
    public IActionResult Index() {

        ViewBag.MobileNumber = "+420 476 108 686";
        ViewBag.CacheVersion = Program.CACHE_VERSION;


        return View("/Views/Index.cshtml");
    }

    [HttpGet("/index"), HttpGet("/home")]
    public IActionResult RedirectToIndex() {
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error() {
        return View("/Views/Error.cshtml", new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}