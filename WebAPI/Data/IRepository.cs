using WebAPI.Models;

namespace WebAPI.Data
{
    public interface IRepository
    {
        //GERAL
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //ALUNO
        Task<Contact[]> GetAllContactsAsync();
        //Task<Aluno[]> GetAlunosAsyncByDisciplinaId(int disciplinaId, bool includeDisciplina);
        //Task<Aluno> GetAlunoAsyncById(int alunoId, bool includeProfessor);

        //PROFESSOR
        //Task<Professor[]> GetAllProfessoresAsync(bool includeAluno);
        //Task<Professor> GetProfessorAsyncById(int professorId, bool includeAluno);
        //Task<Professor[]> GetProfessoresAsyncByAlunoId(int alunoId, bool includeDisciplina);
    }
}
