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
    public class TransaccionController : ApiController
    {
        public Transaccion Post([FromBody] Transaccion value)
        {
            GestorTransaccion transaccion = new GestorTransaccion();
            value.Id_transaccion = transaccion.AgregarTransaccion(value);
            return value;
        }
        [Route("api/Transaccion/GetTransacciones")]
        [HttpGet]
        public HttpResponseMessage GetTransaccion()
        {
            string query = @"
                            SELECT TOP 5 c.cvu, tt.descripcion, t.fecha_transaccion, t.numeroTarjeta, t.numeroCVV, t.monto FROM Transaccion t, Cuenta c, Tipo_Transaccion tt
                            WHERE t.id_tipo = tt.id_tipo_transaccion and c.id_cuenta = t.cuenta_id
                            ORDER BY t.id_transaccion desc
                            

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
        //[Route("api/Transaccion/GetCuentas")]
        //public IEnumerable<Cuenta> Get()
        //{
        //    //INSTANCIAMOS EL GESTORCLIENTES CON EL METODO OBTENER CLIENTES
        //    GestorTransaccion cuenta = new GestorTransaccion();
        //    return cuenta.Cuentas();
        //}
        //public IEnumerable<Transaccion> Get()
        //{
        //    //INSTANCIAMOS EL GESTORCLIENTES CON EL METODO OBTENER CLIENTES
        //    GestorTransaccion tranasaccion = new GestorTransaccion();
        //    return tranasaccion.ObtenerTransacciones();
        //}

        //public Transaccion Get(int id)
        //{
        //    GestorTransaccion transaccion = new GestorTransaccion();
        //    return transaccion.ObtenerTransaccion(id);
        //}

        //public string Post(Transaccion t)
        //{
        //    try
        //    {
        //        string query = @"
        //                     insert into dbo.Transaccion values
        //                        (

        //                         '" + t.Id_tipo + @"', 
        //                         '" + t.Cuenta_id + @"', 
        //                         '" + t.Fecha_transaccion + @"', 
        //                         '" + t.Monto + @"', 
        //                         '" + t.NumeroTarjeta + @"', 
        //                         '" + t.NumeroCVV + @"', 

        //                         )

        //                     ";
        //        DataTable table = new DataTable();
        //        using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BDLocal"].ConnectionString))
        //        using (var cmd = new SqlCommand(query, con))
        //        using (var da = new SqlDataAdapter(cmd))

        //        {
        //            cmd.CommandType = CommandType.Text;
        //            da.Fill(table);

        //        }
        //        return "Insert Correcto!";
        //    }
        //    catch (Exception)
        //    {
        //        return "Insert Fallido!";
        //    }
        //}
    }
}