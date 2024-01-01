using API.Data;
using API.Interfaces;
using API.Models;

namespace API.Repositories;

public class TicketingRepository : ITicketingRepository
{
    private readonly DataContext _context;

    public TicketingRepository(DataContext context)
    {
        _context = context;
    }
    public async Task<bool> Add(Ticketing ticketing)
    {
        _context.Add(ticketing);
        return await Save();
    }

    public async Task<bool> Save()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}
