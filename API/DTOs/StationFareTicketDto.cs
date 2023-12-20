using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class StationFareTicketDto
{
    public string TicketId { get; set; }
    public string Username { get; set; }
    public string Price { get; set; }
    public string From { get; set; }
    public string Destination { get; set; }
}
