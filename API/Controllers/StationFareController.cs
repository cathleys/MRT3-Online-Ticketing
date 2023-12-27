using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


public class StationFareController : BaseApiController
{
    private static IList<StationFare> stationFare = new List<StationFare>
    {
        new StationFare{Id="1", From="Ortigas", Destination="Q.Ave", Price="13"},
        new StationFare{Id="2", From="Shaw Blvd.", Destination="North Ave", Price="13"},
        new StationFare{Id="3", From="Taft Ave.", Destination="Q.Ave", Price="16"},
    };
    private static IList<StationFareTicket> stationFareTicket = new List<StationFareTicket>();

    [HttpGet]
    [ProducesResponseType(200)]

    public ActionResult<IEnumerable<StationFareDto>> Search()
    {
        var fares = stationFare.Select(fare =>
        new StationFareDto
        {
            Id = fare.Id,
            Price = fare.Price,
            From = fare.From,
            Destination = fare.Destination
        });



        return Ok(fares);
    }


    [HttpGet("{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]

    public ActionResult<StationFareDto> Find(string id)
    {

        var fare = stationFare.FirstOrDefault(f => f.Id == id);

        if (fare == null) return NotFound("stationfare not found");

        var fareDto = new StationFareDto
        {
            Id = fare.Id,
            Price = fare.Price,
            From = fare.From,
            Destination = fare.Destination
        };
        return Ok(fareDto);
    }

    [HttpPost("buy-ticket")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]

    public ActionResult<StationFareTicket> Buy(StationFareTicketDto dto)
    {
        var ticket = stationFare.Any(t => t.Id == dto.TicketId);

        if (ticket == false) return NotFound();

        var sf = new StationFareTicket
        {
            TicketId = dto.TicketId,
            Username = dto.Username,
            Price = dto.Price,
            From = dto.From,
            Destination = dto.Destination
        };
        stationFareTicket.Add(sf);
        System.Diagnostics.Debug.WriteLine($"Buying a new ticket with {dto.TicketId}");
        return NoContent();
    }
}
