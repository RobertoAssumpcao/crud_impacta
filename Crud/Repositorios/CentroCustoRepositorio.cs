using Crud.Data;
using Crud.Models;
using Crud.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Crud.Repositorios
{
    public class CentroCustoRepositorio : ICentroCustoRepositorio
    {
        private readonly CentroCustoDBContext _dbContext;

        public CentroCustoRepositorio(CentroCustoDBContext centroCustoDBContext)
        {
            _dbContext = centroCustoDBContext;
        }

        public async Task<CentroCustoModel> BuscarPorId(int id)
        {
            return await _dbContext.CentrosCustos.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<CentroCustoModel>> BuscarTodosCentrosCustos()
        {
            return await _dbContext.CentrosCustos.ToListAsync();
        }
        public async Task<CentroCustoModel> Adicionar(CentroCustoModel centroCusto)
        {
            await _dbContext.CentrosCustos.AddAsync(centroCusto);
            await _dbContext.SaveChangesAsync();
            return centroCusto;
        }

        public async Task<bool> Apagar(int id)
        {
            CentroCustoModel centroCustoPorId = await BuscarPorId(id);

            if (centroCustoPorId == null)
            {
                throw new Exception($"Centro de custo com o ID: {id} Não encontrado!");
            }

            _dbContext.CentrosCustos.Remove(centroCustoPorId);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<CentroCustoModel> Atualizar(CentroCustoModel centroCusto, int id)
        {
            CentroCustoModel centroCustoPorId = await BuscarPorId(id);

            if(centroCustoPorId == null)
            {
                throw new Exception($"Centro de custo com o ID: {id} Não encontrado!");
            }

            centroCustoPorId.Codigo = centroCusto.Codigo;
            centroCustoPorId.Nome = centroCusto.Nome;
            centroCustoPorId.DataInicial = centroCusto.DataInicial;
            centroCustoPorId.DataFinal = centroCusto.DataFinal;

            _dbContext.CentrosCustos.Update(centroCustoPorId);
            await _dbContext.SaveChangesAsync();
            return centroCustoPorId;
        }
    }
}
