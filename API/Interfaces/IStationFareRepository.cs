using API.Helpers;
using API.Models;

namespace API.Interfaces;

public interface IStationFareRepository
{

    Task<IEnumerable<StationFare>> GetStationFare(FareSearchParam fsSearchParam);
    Task<StationFare> GetStationFareById(string id);
    Task<bool> Save();
}
