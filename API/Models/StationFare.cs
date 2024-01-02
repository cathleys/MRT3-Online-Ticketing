namespace API.Models;

public class StationFare
{
    public string Id { get; set; }
    public string Price { get; set; }
    public string From { get; set; }
    public string Destination { get; set; }

    public IList<Ticketing> Ticketing { get; set; } = new List<Ticketing>();
}
