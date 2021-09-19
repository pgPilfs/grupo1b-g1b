using PILBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PILBackend.Controllers
{
    //CREAMOS EL CONTROLADOR PARA CLIENTES
    public class ClienteController : ApiController
    {
        [EnableCors(origins: "http://localhost:4200/", headers:"*", methods:"*")]
        // GET: api/Cliente
        //METODO HTTP GET PARA TRAER LOS CLIENTES DE LA DB
        public IEnumerable<Cliente> Get()
        {
            //INSTANCIAMOS EL GESTORCLIENTES CON EL METODO OBTENER CLIENTES
            GestorCliente gCliente = new GestorCliente();
            return gCliente.ObtenerClientes();
        }

        // GET: api/Cliente/5
        //METODO HTTP GET PARA TRAER LOS CLIENTES POR ID DE LA DB
        public Cliente Get(int id_cliente)
        {
            //INSTANCIAMOS EL GESTORCLIENTE CON EL METODO OBTENER CLIENTES ID
            GestorCliente gestorCliente = new GestorCliente();
            return gestorCliente.ObtenerClienteID(id_cliente);

        }

        // POST: api/Cliente
        //METODO HTTP POST PARA INSERTAR CLIENTES EN LA DB
        public void Post([FromBody]Cliente value)
        {
            //INSTANCIAMOS EL GESTORCLIENTE CON EL METODO AGREGAR CLIENTE
            GestorCliente gCliente = new GestorCliente();
            gCliente.AgregarCliente(value);
        }

        // PUT: api/Cliente/5
        //METODO HTTP PUT PARA UPDATEAR CLIENTES EN LA DB
        public void Put(int id_cliente, [FromBody]Cliente value)
        {
            //INSTANCIAMOS EL GESTORCLIENTE CON EL METODO UPDATE CLIENTE
            GestorCliente gCliente = new GestorCliente();
            gCliente.UpdateCliente(value);
        }

        // DELETE: api/Cliente/5
        //METODO HTTP DELETE PARA ELIMINAR CLIENTES EN LA DB
        public void Delete(int id_cliente)
        {
            //INSTANCIAMOS EL GESTORCLIENTE CON EL METODO ELIMINAR
            GestorCliente gCliente = new GestorCliente();
            gCliente.Eliminar(id_cliente);
        }
    }
}
