using Microsoft.AspNetCore.Mvc;

namespace MySalonMostWeb.Controllers;

public class ErrorController : Controller {

    [Route("/error")]
    public IActionResult Error() {
        return View("/Views/Error.cshtml");
    }
}