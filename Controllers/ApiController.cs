using System.Text.Json;
using System.Text.Json.Nodes;
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

    [HttpGet("reviews")]
    public IActionResult Reviews() {
        var reviews = Review.GetAll();
        var array = new JsonArray();

        foreach (Review review in reviews) {
            var obj = new JsonObject() {
                ["id"] = review.Id,
                ["author"] = new JsonObject() {
                    ["name"] = review.Author.Name,
                    ["avatar"] = review.Author.Avatar,
                },
                ["text"] = review.Text,
                ["stars"] = review.Stars,
                ["created_at"] = review.CreatedAt
            };

            array.Add(obj);
        }

        return new JsonResult(array);
    }
}