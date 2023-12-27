using API.Data;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class StationFareRepository : IStationFareRepository
{
    private readonly DataContext _context;

    public StationFareRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<bool> Add(StationFare stationFare)
    {
        _context.Add(stationFare);
        return await Save();
    }

    public async Task<bool> Delete(StationFare stationFare)
    {
        _context.Remove(stationFare);
        return await Save();
    }

    public async Task<IEnumerable<StationFare>> GetStationFare()
    {
        return await _context.StationFares.ToListAsync();

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
