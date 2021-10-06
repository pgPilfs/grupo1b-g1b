using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class CuentasController : ApiController
    {
        //public IEnumerable<Cuenta> Get()
        //{
        //    //INSTANCIAMOS EL GESTORCLIENTES CON EL METODO OBTENER CLIENTES
        //    GestorTransaccion cuenta = new GestorTransaccion();
        //    return cuenta.Cuentas();    
        //}
        [Route("api/Transaccion/GetCuentas")]
        [HttpGet]
        public HttpResponseMessage GetCuentas()
        {
            string query = @"
                             select id_cuenta, cvu, alias, saldo, estado 
                             from Cuenta

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