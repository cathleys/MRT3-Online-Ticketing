using System.Text.Json;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class Seed
{
    public static async Task SeedFare(DataContext context)
    {

        //stationfares
        if (await context.StationFares.AnyAsync()) return;

        var stationFareData = await File.ReadAllTextAsync("Data/SeedData.json");
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

        var stationFare = JsonSerializer.Deserialize<List<StationFare>>(stationFareData, options);

        foreach (var fare in stationFare)
        {
            fare.Id = Guid.NewGuid().ToString();
            context.StationFares.Add(fare);
        }

        await context.SaveChangesAsync();


    }

    public static async Task SeedUsers(UserManager<AppUser> userManager,
    RoleManager<IdentityRole> roleManager)
    {

        if (await userManager.Users.AnyAsync()) return;


        //roles
        var roles = new List<IdentityRole>
        {
            new IdentityRole{ Name = "Admin"},
            new IdentityRole{ Name = "Member"}
        };

        foreach (var role in roles)
        {
            await roleManager.CreateAsync(role);
        }

        //users
        var admin = new AppUser
        {
            UserName = "admin",
            Email = "admin@gmail.com",
        };
        await userManager.CreateAsync(admin, "Pa$$w0rd");
        await userManager.AddToRoleAsync(admin, "Admin");

        var member = new AppUser
        {
            UserName = "member",
            Email = "member@gmail.com",
        };
        await userManager.CreateAsync(member, "Pa$$w0rd");
        await userManager.AddToRoleAsync(member, "Member");
    }
}
