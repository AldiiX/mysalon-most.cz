using Microsoft.AspNetCore.Mvc;

namespace MySalonMostWeb.Controllers;

public class TeamController : Controller {

    [HttpGet("/team"), HttpGet("/tym"), HttpGet("/tým")]
    public IActionResult Team() {
        return View("/Views/Team.cshtml");
    }
}