using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


[ApiController]
[Route("api/[controller]")]
public class StationFareController : ControllerBase
{

    [HttpGet]
    public ActionResult<IEnumerable<StationFare>> GetStationFares()
    {
        var fares = new List<StationFare>
        {
        new StationFare{Id=1, From="Ortigas", Destination="Q.Ave", Price="13Php"},
        new StationFare{Id=2, From="Shaw Blvd.", Destination="North Ave", Price="13Php"},
        new StationFare{Id=3, From="Taft Ave.", Destination="Q.Ave", Price="16Php"},
        };

        return Ok(fares.ToList());
    }


    [HttpGet("{id}")]
    public ActionResult GetStationFares(int id)
    {
        var fares = new List<StationFare>{
        new StationFare{Id=1, From="Ortigas", Destination="Q.Ave", Price="13Php"},
        new StationFare{Id=2, From="Shaw Blvd.", Destination="North Ave", Price="13Php"},
        new StationFare{Id=3, From="Taft Ave.", Destination="Q.Ave", Price="16Php"},
    };
        var fare = fares.FirstOrDefault(f => f.Id == id);
        return Ok(fare);
    }
}
