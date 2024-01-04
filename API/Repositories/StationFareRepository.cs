using API.Data;
using API.Helpers;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class StationFareRepository : IStationFareRepository
{
    private readonly DataContext _context;

    public StationFareRepository(DataContext context)
    {
        _context = context;
    }


    public async Task<IEnumerable<StationFare>> GetStationFare(FareSearchParam fsSearchParam)
    {
        var query = _context.StationFares.AsQueryable();

        if (!string.IsNullOrEmpty(fsSearchParam.From))
        {
            query = query.Where(f => f.From.Contains(fsSearchParam.From));
        }

        if (!string.IsNullOrEmpty(fsSearchParam.Destination))
        {
            query = query.Where(f => f.Destination.Contains(fsSearchParam.Destination));
        }

        return await query.ToListAsync();

    }

    public async Task<StationFare> GetStationFareById(string id)
    {

        return await _context.StationFares
        .FirstOrDefaultAsync(sf => sf.Id == id);
    }


    public async Task<bool> Save()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}
