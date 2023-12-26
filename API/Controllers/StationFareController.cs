using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


public class StationFareController : BaseApiController
{

    private static IList<StationFareTicketDto> BuyTickets = new List<StationFareTicketDto>();

    [HttpGet]
    [ProducesResponseType(200)]

    public ActionResult<IEnumerable<StationFare>> Search()
    {
        var fares = new List<StationFare>
        {
        new StationFare{Id="1", From="Ortigas", Destination="Q.Ave", Price="13"},
        new StationFare{Id="2", From="Shaw Blvd.", Destination="North Ave", Price="13"},
        new StationFare{Id="3", From="Taft Ave.", Destination="Q.Ave", Price="16"},
        };

        return Ok(fares.ToList());
    }


    [HttpGet("{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]

    public ActionResult<StationFare> Find(string id)
    {
        var fares = new List<StationFare>{
        new StationFare{Id="1", From="Ortigas", Destination="Q.Ave", Price="13"},
        new StationFare{Id="2", From="Shaw Blvd.", Destination="North Ave", Price="13"},
        new StationFare{Id="3", From="Taft Ave.", Destination="Q.Ave", Price="16"},
    };
        var fare = fares.FirstOrDefault(f => f.Id == id);

        if (fare == null) return NotFound("stationfare not found");

        return Ok(fare);
    }

    [HttpPost("buy-ticket")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]

    public void Buy(StationFareTicketDto dto)
    {
        // var ticket = BuyTickets.Any(t => t.TicketId == dto.TicketId);

        // if (ticket is false) return NotFound();

        BuyTickets.Add(dto);
        System.Diagnostics.Debug.WriteLine($"Buying a new ticket with {dto.TicketId}");
        // return NoContent()
    }
}
