using Microsoft.AspNetCore.Identity;

namespace API.Models;

public class AppUser : IdentityUser
{
    public List<Ticketing> MyProperty { get; set; } = new List<Ticketing>();

}
