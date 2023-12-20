using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
[ProducesResponseType(400)]
[ProducesResponseType(500)]
public class BaseApiController : ControllerBase
{

}
