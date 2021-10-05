using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Cuenta
    {
        //private int id_cuenta;
        //private string nombre;
        //private string apellido;
        //private double saldo;

        //public Cuenta(int id_cuenta, string nombre, string apellido, double saldo)
        //{
        //    this.id_cuenta = id_cuenta;
        //    this.nombre = nombre;
        //    this.apellido = apellido;
        //    this.saldo = saldo;
        //}
        //public Cuenta()
        //{

        //}

        public int Id_cuenta { get; set; }
        public string Nombre { get; set ; }
        public string Apellido { get ; set ; }
        public double Saldo { get; set ; }
    }
}