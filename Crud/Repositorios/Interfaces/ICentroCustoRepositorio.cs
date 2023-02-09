using Crud.Models;

namespace Crud.Repositorios.Interfaces
{
    public interface ICentroCustoRepositorio
    {
        Task<List<CentroCustoModel>> BuscarTodosCentrosCustos();
        Task<CentroCustoModel> BuscarPorId(int id);
        Task<CentroCustoModel> Adicionar(CentroCustoModel centroCusto);
        Task<CentroCustoModel> Atualizar(CentroCustoModel centroCusto, int id);
        Task<bool> Apagar(int id);
    }
}
