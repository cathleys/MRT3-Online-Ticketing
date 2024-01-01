using API.DTOs;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


//[Authorize]
public class StationFareController : BaseApiController
{
    private readonly IStationFareRepository _stationFareRepository;
    private readonly ITicketingRepository _ticketingRepository;

    public StationFareController(
    IStationFareRepository stationFareRepository,
    ITicketingRepository ticketingRepository
)
    {
        _stationFareRepository = stationFareRepository;
        _ticketingRepository = ticketingRepository;
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
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]

    public async Task<ActionResult> Buy(StationFareTicketDto dto)
    {
        var fare = await _stationFareRepository.GetStationFareById(dto.Id);

        if (fare == null) return NotFound("station fare does not exist");

        try
        {
            var ticketing = new Ticketing
            {
                Username = dto.Username,
                StationFareId = fare.Id,
                StationFare = fare
            };

            fare.Ticketing.Add(ticketing);

            if (await _stationFareRepository.Save())
            {
                System.Diagnostics.Debug.WriteLine($"Buying a new ticket with {dto.Id}, same with {fare.Id}");
                return NoContent();
            }
            else
            {
                System.Diagnostics.Debug.WriteLine("Save operation returned false.");
                return BadRequest("Error while saving ticketing");
            }
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine($"Exception during Buy operation: {ex.Message}");
            return BadRequest($"Error while processing the request: {ex.Message}");
        }


    }

}
