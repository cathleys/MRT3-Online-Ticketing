using API.Data;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class TicketingRepository : ITicketingRepository
{
    private readonly DataContext _context;

    public TicketingRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Ticketing>> MyTicketing()
    {
        throw new NotImplementedException();
    }
}
