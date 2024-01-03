using API.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class TicketingController : BaseApiController
{

    [HttpGet("{email}")]
    [ProducesResponseType(200)]
    public Task<IEnumerable<TicketingDto>> List(string email)
    {
        throw new NotImplementedException();
    }

}
