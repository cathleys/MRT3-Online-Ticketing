using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class TicketingsAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ticketings",
                columns: table => new
                {
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    StationFareId = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ticketings", x => x.Username);
                    table.ForeignKey(
                        name: "FK_Ticketings_StationFares_StationFareId",
                        column: x => x.StationFareId,
                        principalTable: "StationFares",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ticketings_StationFareId",
                table: "Ticketings",
                column: "StationFareId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ticketings");
        }
    }
}
