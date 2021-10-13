using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebApplication1.Models
{
    public class GestorTransaccion
    {
        //    public Transaccion ObtenerTransaccion(int id)
        //    {
        //        Transaccion transaccion = null;


        //        string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

        //        using (SqlConnection conn = new SqlConnection(StrConn))
        //        {
        //            conn.Open();

        //            SqlCommand comm = conn.CreateCommand();
        //            comm.CommandText = "obtener_transaccion";
        //            comm.CommandType = CommandType.StoredProcedure;
        //            comm.Parameters.Add(new SqlParameter("@id", id));

        //            SqlDataReader dr = comm.ExecuteReader();

        //            if (dr.Read())
        //            {

        //                int id_tipo_transaccion = dr.GetInt32(1);
        //                int id_cuenta = dr.GetInt32(2);
        //                DateTime fecha_transaccion = dr.GetDateTime(3);
        //                double monto = dr.GetDouble(4);
        //                int numeroTarjeta = dr.GetInt32(5);
        //                int numeroCVV = dr.GetInt32(6);


        //                transaccion = new Transaccion(id,id_tipo_transaccion, fecha_transaccion, monto, id_cuenta, numeroTarjeta,numeroCVV);

        //                dr.Close();

        //            }

        //        }

        //        return transaccion;
        //    }
        //    //CREAMOS EL METODO LISTA OBTENER CLIENTES
        //public List<Transaccion> ObtenerTransacciones()
        //{
        //    //CREAMOS UNA LISTA
        //    List<Transaccion> lista = new List<Transaccion>();
        //    //INSTANCIAMOS LA CONEXCION CON LA BASE DE DATOS
        //    string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

        //    using (SqlConnection conn = new SqlConnection(connection))
        //    {
        //        //ABRIMOS LA CONEXCION CON LA BASE DE DATOS
        //        conn.Open();
        //        //INSTANCIAMOS UN SQLCOMMAND PARA ACCEDER A LA STORE PROCEDURE DE LA DB
        //        SqlCommand comm = conn.CreateCommand();
        //        comm.CommandText = "obtener_transacciones";
        //        comm.CommandType = CommandType.StoredProcedure;
        //        //INSTANCIAMOS UN SQLDATAREADER Y LO EJECUTAMOS
        //        SqlDataReader dr = comm.ExecuteReader();
        //        while (dr.Read())
        //        {
        //            int Id_transaccion = dr.GetInt32(0);
        //            int Id_tipo = dr.GetInt32(1);
        //            int Cuenta_id = dr.GetInt32(2);
        //            DateTime Fecha_transaccion = dr.GetDateTime(3);
        //            double Monto = dr.GetDouble(4);
        //            int NumeroTarjeta = dr.GetInt32(5);
        //            int NumeroCVV = dr.GetInt32(6);




        //            //CARGAMOS LOS DATOS EN LA VARIABLE CLIENTE Y AGREGAMOS LA VARIABLE CLIENTE CON LOS DATOS A LA LISTA  
        //            Transaccion transaccion = new Transaccion();
        //            lista.Add(transaccion);
        //        }
        //        //CERRAMOS EL READER
        //        dr.Close();
        //    }
        //    //RETORNAMOS LA LISTA
        //    return lista;
        //}
        public int AgregarTransaccion(Transaccion transaccion)
        {
            string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(connection))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "agregar_transacciones";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id_tipo", transaccion.Id_tipo));
                comm.Parameters.Add(new SqlParameter("@fecha_transaccion", DateTime.Now));
                comm.Parameters.Add(new SqlParameter("@monto", transaccion.Monto));
                comm.Parameters.Add(new SqlParameter("@cuenta_id", transaccion.Cuenta_id));
                comm.Parameters.Add(new SqlParameter("@numeroTarjeta", transaccion.NumeroTarjeta));
                comm.Parameters.Add(new SqlParameter("@numeroCVV", transaccion.NumeroCVV));
                comm.Parameters.Add(new SqlParameter("@cvu", transaccion.Cvu));
                return Convert.ToInt32(comm.ExecuteScalar());

            }
        }
        //public List<Cuenta> Cuentas()
        //{
        //    //CREAMOS UNA LISTA
        //    List<Cuenta> lista = new List<Cuenta>();
        //    //INSTANCIAMOS LA CONEXCION CON LA BASE DE DATOS
        //    string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

        //    using (SqlConnection conn = new SqlConnection(connection))
        //    {
        //        //ABRIMOS LA CONEXCION CON LA BASE DE DATOS
        //        conn.Open();
        //        //INSTANCIAMOS UN SQLCOMMAND PARA ACCEDER A LA STORE PROCEDURE DE LA DB
        //        SqlCommand comm = conn.CreateCommand();
        //        comm.CommandText = "obtener_cuentas";
        //        comm.CommandType = CommandType.StoredProcedure;
        //        //INSTANCIAMOS UN SQLDATAREADER Y LO EJECUTAMOS
        //        SqlDataReader dr = comm.ExecuteReader();
        //        while (dr.Read())
        //        {
        //            int id_cuenta = dr.GetInt32(0);
        //            string nombre = dr.GetString(1).Trim();
        //            string apellido = dr.GetString(2).Trim();
        //            double saldo = dr.GetDouble(3);





        //            //CARGAMOS LOS DATOS EN LA VARIABLE CLIENTE Y AGREGAMOS LA VARIABLE CLIENTE CON LOS DATOS A LA LISTA  
        //            Cuenta cuenta = new Cuenta(id_cuenta, nombre, apellido, saldo);
        //            lista.Add(cuenta);
        //        }
        //        //CERRAMOS EL READER
        //        dr.Close();
        //    }
        //    //RETORNAMOS LA LISTA
        //    return lista;
        //}
    }


}
