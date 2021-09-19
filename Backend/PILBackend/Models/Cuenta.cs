using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PILBackend.Models
{
    public class Cuenta
    {
        private int id_cuenta;
        private string cvu;
        private double saldo;
        private string email;
        private string password;
        private bool estado;
        private List<Transaccion> transacciones = new List<Transaccion>();

        public Cuenta(int id_cuenta, string cvu, double saldo, string email, string password, bool estado)
        {
            Id = id_cuenta;
            Cvu = cvu;
            Saldo = saldo;
            Email = email;
            Password = password;
            Estado = estado;
        }

        public int Id { get => id_cuenta; set => id_cuenta = value; }
        public string Cvu { get => cvu; set => cvu = value; }
        public double Saldo { get => saldo; set => saldo = value; }
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
        public bool Estado { get => estado; set => estado = value; }
        public List<Transaccion> Transacciones { get => transacciones; set => transacciones = value; }
    }
    public class Transaccion
    {
        private int id_transaccion;
        private string tipo_trans;
        private DateTime fecha_trans;
        private double monto;
        private string cvuDestino;
        private string cvuOrigen;
        private int idCuenta;
        

        public Transaccion(DateTime fecha_trans, double monto, string cvuDestino, string cvyOrigen, int idCuenta, string tipo_trans)
        {

            Fecha_Trans = fecha_trans;
            Monto = monto;
            CvuDestino = cvuDestino;
            cvuOrigen = cvyOrigen;
            IdCuenta = idCuenta;
            Tipo_Trans = tipo_trans;
        }

        public int Id_Transaccion { get => id_transaccion; set => id_transaccion = value; }
        public DateTime Fecha_Trans { get => fecha_trans; set => fecha_trans = value; }
        public double Monto { get => monto; set => monto = value; }
        public string CvuDestino { get => cvuDestino; set => cvuDestino = value; }
        public string CvyOrigen { get => cvuOrigen; set => cvuOrigen = value; }
        public int IdCuenta { get => idCuenta; set => idCuenta = value; }
        public string Tipo_Trans { get => tipo_trans; set => tipo_trans = value; }
    }
}