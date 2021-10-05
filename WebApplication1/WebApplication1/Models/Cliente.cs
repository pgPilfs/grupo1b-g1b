using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Cliente
    {
        public Cliente(string email, string password)
        {
            Email = email;
            Password = password;
        }

        //CREAR LA PROPIEDAD DE LOS DATOS DE LA CLASE
        public int Id_cliente { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateTime Fecnac { get; set; }
        public string Domicilio { get; set; }
        public string Pisodpto { get; set; }
        public string Telefono { get; set; }
        public string Cpostal { get; set; }
        public string Cuil { get; set; }
        public string Nombre_ciudad { get; set; }
        public string Nombre_provincia { get; set; }
        public string Email { get; set; }
        public string Foto_dni_frente { get; set; }
        public string Foto_dni_reversa { get; set; }
        public string Password { get; set; }

    }

}