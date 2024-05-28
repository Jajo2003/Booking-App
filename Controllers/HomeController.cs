using Microsoft.AspNetCore.Mvc;

namespace BookingApp.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    public IActionResult About()
    {
        return View();
    }
    public IActionResult Services()
    {
        return View();
    }
    public IActionResult Gallery()
    {
        return View();
    }
    public IActionResult ContactUs()
    {
        return View();
    }
}
