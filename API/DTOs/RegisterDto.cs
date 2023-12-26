using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{

    [Required(ErrorMessage = "Email address is required")]
    [Display(Name = "Email Address")]
    [StringLength(40, MinimumLength = 4)]
    [EmailAddress]
    public string Email { get; set; }

    [Required(ErrorMessage = "Username is required")]
    [StringLength(40, MinimumLength = 4)]
    public string Username { get; set; }

    [Required(ErrorMessage = "Password is required")]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [Required]
    public bool Gender { get; set; }

}
