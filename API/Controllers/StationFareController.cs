using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


[ApiController]
[Route("api/[controller]")]
public class StationFareController : ControllerBase
{

    [HttpGet]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(500)]
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
    [ProducesResponseType(400)]
    [ProducesResponseType(500)]
    public ActionResult<StationFare> Buy(string id)
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
}
