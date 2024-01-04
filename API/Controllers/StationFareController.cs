
using API.DTOs;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


public class StationFareController : BaseApiController
{
    private readonly IStationFareRepository _stationFareRepository;

    public StationFareController(
    IStationFareRepository stationFareRepository
)
    {
        _stationFareRepository = stationFareRepository;

    }

    [HttpGet]
    [ProducesResponseType(200)]

    public async Task<ActionResult<IEnumerable<StationFareDto>>> Search()
    {
        return Ok(await _stationFareRepository.GetStationFare());
    }


    [HttpGet("{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]

    public async Task<ActionResult<StationFareDto>> Find(string id)
    {

        var fare = await _stationFareRepository.GetStationFareById(id);

        if (fare == null) return NotFound("station fare not found");

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
    [ProducesResponseType(201)]
    [ProducesResponseType(404)]

    public async Task<ActionResult> Buy(StationFareTicketDto dto)
    {
        var fare = await _stationFareRepository.GetStationFareById(dto.Id);

        if (fare == null) return NotFound("station fare does not exist");

        var ticketing = new Ticketing
        {
            Username = dto.Username,
            StationFareId = fare.Id,
            StationFare = fare
        };

        fare.Ticketing.Add(ticketing);
        try
        {

            if (await _stationFareRepository.Save())
            {
                System.Diagnostics.Debug.WriteLine($"Buying a new ticket with {dto.Id}, same with {fare.Id}");

                // Return CreatedAtAction with the dynamically generated URL
                return Created(Url.Action(nameof(Find), new { id = fare.Id }), null);

            }
            return BadRequest("Problem saving ticket");

        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine($"Exception during Buy operation: {ex}");

            while (ex.InnerException != null)
            {
                System.Diagnostics.Debug.WriteLine($"Inner Exception: {ex.InnerException}");
            }

            return BadRequest($"Error while processing the request: {ex.Message}");
        }


    }

}
