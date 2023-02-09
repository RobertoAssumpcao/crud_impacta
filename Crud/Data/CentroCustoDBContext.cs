using Crud.Models;
using Microsoft.EntityFrameworkCore;

namespace Crud.Data
{
    public class CentroCustoDBContext : DbContext
    {
        public CentroCustoDBContext(DbContextOptions<CentroCustoDBContext> options) : base(options)
        {
        }

        public DbSet<CentroCustoModel> CentrosCustos { get; set; }
    
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
