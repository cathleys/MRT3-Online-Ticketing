using API.Data;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories;

public class UserRepository : IUserRepository
{
    private readonly DataContext _context;

    public UserRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<bool> Add(AppUser user)
    {
        _context.Add(user);
        return await Save();
    }

    public async Task<AppUser> GetUserById(string userId)
    {
        return await _context.Users.FindAsync(userId);

    }

    public async Task<AppUser> GetUserByUsername(string username)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.UserName == username);
    }

    public async Task<bool> Save()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public async Task<bool> Update(AppUser user)
    {
        _context.Update(user);
        return await Save();
    }
}
