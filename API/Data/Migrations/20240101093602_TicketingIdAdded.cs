using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class TicketingIdAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Ticketings",
                table: "Ticketings");

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                table: "Ticketings",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "Ticketings",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ticketings",
                table: "Ticketings",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Ticketings",
                table: "Ticketings");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Ticketings");

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                table: "Ticketings",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ticketings",
                table: "Ticketings",
                column: "Username");
        }
    }
}
