using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Transaccion
    {
        //private int id_transaccion;
        //private int id_tipo_transaccion;
        ////private List<TipoTransaccion> tipoTransaccion = new List<TipoTransaccion>();
        //private DateTime fechaTransaccion;
        //private double monto;
        //private int id_cuenta;
        //private int numeroTarjeta;
        //private int numeroCVV;

        //public Transaccion(int id_transaccion,int id_tipo_transaccion, DateTime fechaTransaccion, double monto, int id_cuenta, int numeroTarjeta, int numeroCVV)
        //{
        //    this.id_transaccion = id_transaccion;
        //    this.id_tipo_transaccion = id_tipo_transaccion;
        //    this.fechaTransaccion = fechaTransaccion;
        //    this.monto = monto;
        //    this.id_cuenta = id_cuenta;
        //    this.numeroTarjeta = numeroTarjeta;
        //    this.numeroCVV = numeroCVV;
              
        //}

        public int Id_transaccion { get  ; set; }
        //public List<TipoTransaccion> tipo_Transaccion { get => tipo_Transaccion; set => tipo_Transaccion = value; }
        public int Id_tipo { get; set ; }
        public DateTime Fecha_transaccion { get; set; }
        public double Monto { get ; set; }
        public int Cuenta_id { get ; set ; }
        public string NumeroTarjeta { get ; set ; }
        public int NumeroCVV { get; set; }



        /*public class TipoTransaccion
        {
            private int id_tipo_transaccion;
            private string descripcion;

            public TipoTransaccion(int id_tipo_transaccion, string descripcion)
            {
                Id_tipo_transaccion = id_tipo_transaccion;
                Descripcion = descripcion;
            }

            public int Id_tipo_transaccion { get => id_tipo_transaccion; set => id_tipo_transaccion = value; }
            public string Descripcion { get => descripcion; set => descripcion = value; }
        }*/

        /*public class TipoMoneda
        {
            private int id_tipo_moneda;
            private string descripcion;

            public TipoMoneda(int id_tipo_moneda, string descripcion)
            {
                this.id_tipo_moneda = id_tipo_moneda;
                this.descripcion = descripcion;
            }

            public int Id_tipo_moneda { get => id_tipo_moneda; set => id_tipo_moneda = value; }
            public string Descripcion { get => descripcion; set => descripcion = value; }
        }*/
    }
}