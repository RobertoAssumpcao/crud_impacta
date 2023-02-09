using Crud.Data;
using Crud.Repositorios;
using Crud.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Crud
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddEntityFrameworkSqlServer().AddDbContext<CentroCustoDBContext>(
                options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
                );

            builder.Services.AddScoped<ICentroCustoRepositorio, CentroCustoRepositorio>();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyAllowedOrigins",
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:4200") // note the port is included 
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });

            var app = builder.Build();
            app.UseCors("MyAllowedOrigins");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}