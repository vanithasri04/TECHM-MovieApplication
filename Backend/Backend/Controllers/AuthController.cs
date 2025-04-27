using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MovieApp.Models;
using MovieApp.Services;
using MovieApp.Dtos;


namespace MovieApp.Controllers;
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;

        public AuthController(UserService userService)
        {
            _userService = userService;
        }
        [AllowAnonymous]
    [HttpPost("register")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public IActionResult Register([FromBody] RegisterDto dto)
    {
        var user = new User
        {
            Email = dto.Email,
            PasswordHash = dto.Password // ideally hash it
        };

        var result = _userService.Register(user);
        if (result) return Ok(new { message = "User registered successfully" });
        return BadRequest("Registration failed");
    }
        [HttpPost("login")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public IActionResult Login([FromBody] LoginDto dto)
    {
        var user = _userService.Login(dto.Email, dto.Password);
        if (user != null)
            return Ok(new { email = user.Email });

        return Unauthorized("Invalid credentials");
    }
}
    

