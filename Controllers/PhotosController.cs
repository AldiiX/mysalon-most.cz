using Microsoft.AspNetCore.Mvc;

namespace MySalonMostWeb.Controllers;

public class PhotosController : Controller {

    [HttpGet("/fotogalerie"), HttpGet("/photos"), HttpGet("/fotografie")]
    public IActionResult Photos() {
        return View("/Views/Photos.cshtml");
    }
}