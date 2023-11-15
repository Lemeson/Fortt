using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace SmartSchool_WebAPI.Data
{
     public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { } //da opsções de CRUD -- obrigatório
        public DbSet<Contact> Contacts { get; set; }

    }
}