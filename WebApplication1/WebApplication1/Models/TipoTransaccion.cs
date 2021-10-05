using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class TipoTransaccion
    {
        private int id_tipo_transaccion;
        private string descripcion;

        public TipoTransaccion(int id_tipo_transaccion, string descripcion)
        {
            Id_tipo_transaccion = id_tipo_transaccion;
            Descripcion = descripcion;
        }
        private TipoTransaccion()
        {

        }
        public int Id_tipo_transaccion { get => id_tipo_transaccion; set => id_tipo_transaccion = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
    }
}