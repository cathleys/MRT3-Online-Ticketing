using API.Models;

namespace API.Interfaces;

public interface IUserRepository
{
    Task<AppUser> GetUserById(string userId);
    Task<AppUser> GetUserByUsername(string username);
    Task<bool> Add(AppUser user);
    Task<bool> Update(AppUser user);
    Task<bool> Save();
}
