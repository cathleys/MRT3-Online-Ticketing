using API.Models;

namespace API.DTOs;

public class TicketingDto
{
    public string Id { get; set; }
    public string Username { get; set; }

    public StationFare StationFare { get; set; }
}
