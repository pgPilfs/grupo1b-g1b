using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebApplication1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TipoTransaccionController : ApiController
    {

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        //public Transaccion Get(int id)
        //{
        //    GestorTransaccion transaccion = new GestorTransaccion();
        //    return transaccion.ObtenerTransaccion(id);
        //}
        // GET: api/Cliente
        //METODO HTTP GET PARA TRAER LOS CLIENTES DE LA DB
        [Route("api/Transaccion/GetTipoTransacciones")]
        [HttpGet]
        public HttpResponseMessage GetTipoTransacciones()
        {
            string query = @"
                             select id_tipo_transaccion, descripcion
                             from Tipo_Transaccion

                             ";


            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BDLocal"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);

        }
    }
}