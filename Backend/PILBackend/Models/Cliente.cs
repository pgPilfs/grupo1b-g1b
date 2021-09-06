using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PILBackend.Models
{
    //CREAR LAS VARIABLES PRIVADAS DE LA CLASE CLIENTE CON LOS DATOS QUE TIENE EL CLIENTE EN LA BASE DE DATOS
    public class Cliente
    {
        private int id_cliente;
        private string nombre;
        private string apellido;
        private DateTime fecnac;
        private string domicilio;
        private string pisodpto;
        private string telefono;
        private string cpostal;
        private string cuil;
        private int ciudad;
        private int provincia;
        //private int cuenta_id;
        //private string foto_dni_frente;
        //private string foto_dni_reversa;

        //CREAR CONSTRUCTOR DE LA CLASE CON DICHOS DATOS
        public Cliente(int id_cliente, string nombre, string apellido, DateTime fecnac, string domicilio, string pisodpto, string telefono, string cpostal, string cuil, int ciudad, int provincia /*int cuenta_id, string foto_dni_frente, string foto_dni_reversa*/)
        {
            Id_cliente = id_cliente;
            Nombre = nombre;
            Apellido = apellido;
            Fecnac = fecnac;
            Domicilio = domicilio;
            Pisodpto = pisodpto;
            Telefono = telefono;
            Cpostal = cpostal;
            Cuil = cuil;
            Ciudad = ciudad;
            Provincia = provincia;
            //Cuenta_id = cuenta_id;
            //Foto_dni_frente = foto_dni_frente;
            //Foto_dni_reversa = foto_dni_reversa;

        }
        //CREAR LA PROPIEDAD DE LOS DATOS DE LA CLASE
        public int Id_cliente { get => id_cliente; set => id_cliente = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public DateTime Fecnac { get => fecnac; set => fecnac = value; }
        public string Domicilio { get => domicilio; set => domicilio = value; }
        public string Pisodpto { get => pisodpto; set => pisodpto = value; }
        public string Telefono { get => telefono; set => telefono = value; }
        public string Cpostal { get => cpostal; set => cpostal = value; }
        public string Cuil { get => cuil; set => cuil = value; }
        public int Ciudad { get => ciudad; set => ciudad = value; }
        public int Provincia { get => provincia; set => provincia = value; }
        //public int Cuenta_id { get => cuenta_id; set => cuenta_id = value; }
        //public string Foto_dni_frente { get => foto_dni_frente; set => foto_dni_frente = value; }
        //public string Foto_dni_reversa { get => foto_dni_reversa; set => foto_dni_reversa = value; }
    }
}