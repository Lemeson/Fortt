using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class Repository : IRepository //herda de IRepository e aqui os métodos definidos em IRepository tomam "vida"
    {
        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }//até aqui é obgratorio

        public async Task<Contact[]> GetAllContactsAsync() //false é apenas um valor padrão para inicialização
        {
            IQueryable<Contact> query = _context.Contact;

            

            query = query.AsNoTracking()
                         .OrderBy(c => c.id);

            return await query.ToArrayAsync();
        }
        

        
        

    }
}
