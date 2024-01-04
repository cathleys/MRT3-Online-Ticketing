using System.Text.Json.Serialization;

namespace API.Helpers;

public class FareSearchParam
{
    [JsonPropertyName("from")]
    public string From { get; set; }

    [JsonPropertyName("destination")]
    public string Destination { get; set; }
}
