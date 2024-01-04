using API.DTOs;
using API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : IdentityDbContext<AppUser>
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }


    public DbSet<StationFare> StationFares { get; set; }
    public DbSet<Ticketing> Ticketings { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);


        modelBuilder.Entity<StationFare>()
        .HasMany(sf => sf.Ticketing)
        .WithOne(t => t.StationFare)
        .HasForeignKey(t => t.StationFareId)
        .OnDelete(DeleteBehavior.Cascade);
    }

}
