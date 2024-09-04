using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using MySalonMostWeb.Classes.Objects;

namespace MySalonMostWeb.Controllers;

[Route("api")]
public class ApiController : Controller {

    [HttpGet("kadernice")]
    public IActionResult Index() {
        var kaderniceData = Kadernice.GetAll();

        var jsonSettings = new JsonSerializerOptions {
            Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
            WriteIndented = true,
            PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower
        };

        return Json(kaderniceData, jsonSettings);
    }
}