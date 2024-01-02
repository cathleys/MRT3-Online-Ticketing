using System.Text.Json;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class Seed
{
    public static async Task SeedData(DataContext context)
    {
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
}
