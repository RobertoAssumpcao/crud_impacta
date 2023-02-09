using Crud.Models;
using Crud.Repositorios.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Crud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CentroCustoController : ControllerBase
    {
        private readonly ICentroCustoRepositorio _centroCustoRepositorio;

        public CentroCustoController(ICentroCustoRepositorio centroCustoRepositorio)
        {
            _centroCustoRepositorio = centroCustoRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<CentroCustoModel>>> BuscarTodosCentrosCustos()
        {
            List<CentroCustoModel> centrosCustos = await _centroCustoRepositorio.BuscarTodosCentrosCustos();
            return Ok(centrosCustos);
        }
        
        [HttpGet("buscarPorId/{id}")]
        public async Task<ActionResult<List<CentroCustoModel>>> BuscarPorId(int id)
        {
            CentroCustoModel centroCusto = await _centroCustoRepositorio.BuscarPorId(id);
            return Ok(centroCusto);
        }

        [HttpPost]
        public async Task<ActionResult<CentroCustoModel>> Adicionar([FromBody] CentroCustoModel centroCustoModel)
        {
            CentroCustoModel centroCusto = await _centroCustoRepositorio.Adicionar(centroCustoModel);
            return Ok(centroCusto);
        }

        [HttpPut("atualizar/{id}")]
        public async Task<ActionResult<CentroCustoModel>> Atualizar([FromBody] CentroCustoModel centroCustoModel, int id)
        {
            centroCustoModel.Id = id;
            CentroCustoModel centroCusto = await _centroCustoRepositorio.Atualizar(centroCustoModel, id);
            return Ok(centroCusto);
        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<CentroCustoModel>> Apagar(int id)
        {
            bool apagado = await _centroCustoRepositorio.Apagar(id);
            return Ok(apagado);
        }

    }
}
