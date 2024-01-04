using API.DTOs;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly ITokenService _tokenService;
    private readonly UserManager<AppUser> _userManager;

    public AccountController(
     ITokenService tokenService,
     UserManager<AppUser> userManager)
    {
        _tokenService = tokenService;
        _userManager = userManager;
    }

    [HttpPost("register")]
    [ProducesResponseType(201)]

    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
        if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");


        var user = new AppUser
        {
            UserName = registerDto.Username.ToLower(),
            Email = registerDto.Email
        };

        var result = await _userManager.CreateAsync(user, registerDto.Password);
        if (!result.Succeeded) return BadRequest(result.Errors);

        var roleResult = await _userManager.AddToRoleAsync(user, "Member");
        if (!roleResult.Succeeded) return BadRequest(result.Errors);

        return new UserDto
        {
            Email = user.Email,
            Username = user.UserName,
            Token = await _tokenService.CreateToken(user)
        };
    }

    [HttpPost("login")]
    [ProducesResponseType(200)]
    [ProducesResponseType(401)]

    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await _userManager.FindByNameAsync(loginDto.Username);

        if (user is null) return Unauthorized("Invalid username");

        var result = await _userManager.CheckPasswordAsync(user, loginDto.Password);
        if (!result) return BadRequest("Invalid password");

        return new UserDto
        {
            Email = user.Email,
            Username = user.UserName,
            Token = await _tokenService.CreateToken(user)
        };
    }

    private async Task<bool> UserExists(string username)
    {
        return await _userManager.Users.AnyAsync(u => u.UserName == username.ToLower());

    }

}
