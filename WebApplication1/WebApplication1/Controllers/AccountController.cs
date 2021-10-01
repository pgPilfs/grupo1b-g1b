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
            //TODO: This code is only for demo - extract method in new class & validate
            var isUserValid = (login.Email == "juan@juan.com" && login.Password == "juancho12");
            if (isUserValid)
            {

                var token = TokenGenerator.GenerateTokenJwt(login.Email);
                return Ok(token);
            }
            // Unauthorized access
            return Unauthorized();
        }

    }
}
