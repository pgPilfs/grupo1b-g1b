using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/login")]

    public class AccountController : ApiController
    {
        ///<sumary>
        ///Metodo encargado de realizar la autenticacion
        ///</sumary>
        ///<param name="login"></param>
        ///<returns></returns>

        [HttpGet]
        [Route("echoping")]
        public IHttpActionResult EchoPing()
        {
            return Ok(true);
        }
        [HttpGet]
        [Route("echouser")]
        public IHttpActionResult EchoUser()
        {
            var identity = Thread.CurrentPrincipal.Identity;
            return Ok($" IPrincipal-user: {identity.Name} - IsAuthenticated:{ identity.IsAuthenticated}");
        }

        [HttpPost]
        [Route("authenticate")]
        public IHttpActionResult Authenticate(Login login)
        {

          
            if (login == null)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
            string conectar = ConfigurationManager.ConnectionStrings["BDLocal"].ConnectionString;
            SqlConnection sqlConectar = new SqlConnection(conectar);
            SqlCommand cmd = new SqlCommand("SP_ValidarCliente", sqlConectar)
            {
                CommandType = CommandType.StoredProcedure
            };
            cmd.Connection.Open();
            cmd.Parameters.Add("@email", SqlDbType.VarChar, 50).Value = login.Email;
            cmd.Parameters.Add("@password", SqlDbType.VarChar, 50).Value = login.Password;
            SqlDataReader dr = cmd.ExecuteReader();
            if (dr.Read())
            {
                var token = TokenGenerator.GenerateTokenJwt(login.Email);
                login.Token = token;
                return Ok(login);
            }
            else
            {
                return Unauthorized();
            }

            //TODO: This code is only for demo - extract method in new class & validate
            //var isUserValid = (login.Email == "juan@juan.com" && login.Password == "juancho12");
            //if (isUserValid)
            //{

            //    var token = TokenGenerator.GenerateTokenJwt(login.Email);
            //    return Ok(token);
            //}
            //// Unauthorized access
            //return Unauthorized();
        }

    }
}
