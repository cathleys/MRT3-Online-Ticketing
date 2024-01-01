using API.DTOs;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<AppUser> Users { get; set; }
    public DbSet<StationFare> StationFares { get; set; }
    public DbSet<Ticketing> Ticketings { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Ticketing>().HasKey(a => a.Username);

        modelBuilder.Entity<StationFare>()
        .HasMany(sf => sf.Ticketing)
        .WithOne(t => t.StationFare)
        .HasForeignKey(t => t.StationFareId)
        .OnDelete(DeleteBehavior.Cascade);
    }

}
