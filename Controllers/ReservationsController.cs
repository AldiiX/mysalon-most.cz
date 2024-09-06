using Microsoft.AspNetCore.Mvc;

namespace MySalonMostWeb.Controllers;

public class ReservationsController : Controller {

    [HttpGet("/rezervace"), HttpGet("/reservations")]
    public IActionResult Reservations() {
        return View("/Views/Reservations.cshtml");
    }
}