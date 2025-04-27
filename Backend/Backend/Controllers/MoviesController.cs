using Microsoft.AspNetCore.Mvc;
using YourNamespace.Services;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController(MovieService movieService) : ControllerBase
    {
        private readonly MovieService _movieService = movieService;

        [HttpGet]
        public IActionResult Get()
        {
            var movies = _movieService.GetAllMovies();
            return Ok(movies);
        }
    }
}
