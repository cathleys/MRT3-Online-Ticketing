namespace API.Models;

public class Ticketing
{

    public string Username { get; set; }

    public string StationFareId { get; set; }
    public StationFare StationFare { get; set; }

}
