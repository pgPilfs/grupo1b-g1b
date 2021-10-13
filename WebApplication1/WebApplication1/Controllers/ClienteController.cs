using WebApplication1.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication1.Controllers
{
    public class ClienteController : ApiController
    {
        // GET: api/Cliente
        //METODO HTTP GET PARA TRAER LOS CLIENTES DE LA DB

        public HttpResponseMessage Get()
        {
            string query = @"
                        select * from dbo.Clientes
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

        //GET: api/Cliente/5
        //METODO HTTP GET PARA TRAER LOS CLIENTES POR ID DE LA DB

        public HttpResponseMessage Get(int id)
        {
            string query = @"
                        select * from dbo.Clientes
                        INNER JOIN dbo.Cuenta
                        ON dbo.Clientes.id_cliente = dbo.Cuenta.cliente_id
                        where id_cliente=" + id + @"
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

        [Route("api/cliente/GetClientesByEmail")]
        public HttpResponseMessage Get(string email)
        {
            string query = @"
                        select * from Clientes c, Cuenta cc
                        where cc.cliente_id = c.id_cliente and email like '" + email + @"'
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
        //POST: api/Cliente
        //METODO HTTP POST PARA INSERTAR CLIENTES EN LA DB
        public string Post(Cliente cli)
        {
            try
            {
                string query = @"
             
                                insert into dbo.Clientes values
                                (
                                 '" + cli.Nombre + @"', 
                                 '" + cli.Apellido + @"', 
                                 '" + cli.Fecnac + @"', 
                                 '" + cli.Domicilio + @"', 
                                 '" + cli.Pisodpto + @"', 
                                 '" + cli.Telefono + @"', 
                                 '" + cli.Cpostal + @"', 
                                 '" + cli.Cuil + @"', 
                                 '" + cli.Nombre_ciudad + @"', 
                                 '" + cli.Nombre_provincia + @"', 
                                 '" + cli.Email + @"', 
                                 '" + cli.Foto_dni_frente + @"', 
                                 '" + cli.Foto_dni_reversa + @"', 
                                 '" + cli.Password + @"'
                                 )
                                ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BDLocal"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))

                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);

                }
                return "Insert Correcto!";
            }
            catch (Exception)
            {
                return "Insert Fallido!";
            }
        }

        // PUT: api/Cliente/5
        //METODO HTTP PUT PARA UPDATEAR CLIENTES EN LA DB
        [Route("api/cliente/PutClientesByEmail")]
        public string Put(Cliente cli, string email)
        {
            try
            {
                string query = @"
                                update dbo.Clientes 
                                set 
                                telefono= '" + cli.Telefono + @"', 
                                email= '" + cli.Email + @"', 
                               password= '" + cli.Password + @"'
                                where email like '" + email + @"'
                               ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BDLocal"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Update Correcto!";
            }
            catch (Exception)
            {
                return "Update Fallido!";
            }
        }

        // DELETE: api/Cliente/5
        //METODO HTTP DELETE PARA ELIMINAR CLIENTES EN LA DB

        public string Delete(int id)
        {
            try
            {
                string query = @"
                                delete from dbo.Clientes 
                               where id_cliente=" + id + @"
                               ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BDLocal"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Delete Correcto!";
            }
            catch (Exception)
            {
                return "Delete Fallido!";
            }
        }

        // GET: api/Cliente/GetAllCiudadesProvincias
        //METODO HTTP GET PARA OBTENER CIUDADES Y PROVINCIAS DE LA DB
        //[Route("GetAllCiudadesProvincias")]
        [Route("api/cliente/GetProvincias")]
        [HttpGet]
        public HttpResponseMessage GetProvincias()
        {
            string query = @"
                             select id_provincia, nombre_provincia 
                             from Provincia  
                             
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
        [Route("api/cliente/GetCiudades")]
        [HttpGet]
        public HttpResponseMessage GetCiudades()
        {
            string query = @"
                             select id_ciudad, nombre_ciudad
                             from Ciudad
                             
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

        // POST: api/Cliente/SaveFile
        //METODO HTTP POST PARA GUARDAR LAS FOTO DE DNI EN CARPETA Y NO EN DB

        [Route("api/Cliente/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Dni/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {
                return "noname.png";
            }
        }
    }
}
