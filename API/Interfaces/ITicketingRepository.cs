using API.Models;

namespace API.Interfaces;

public interface ITicketingRepository
{
    Task<IEnumerable<Ticketing>> MyTicketing();
}
