using API.Models;

namespace API.Interfaces;

public interface IStationFareRepository
{

    Task<IEnumerable<StationFare>> GetStationFare();
    Task<StationFare> GetStationFareById(string id);
    Task<bool> Save();
}
