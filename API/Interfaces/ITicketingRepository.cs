using API.Models;

namespace API.Interfaces;

public interface ITicketingRepository
{
    Task<bool> Add(Ticketing ticketing);
    Task<bool> Save();


}
