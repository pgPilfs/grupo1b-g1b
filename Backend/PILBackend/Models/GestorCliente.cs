using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PILBackend.Models
{
    public class GestorCliente
    {
        //CREAMOS EL METODO AGREGAR CLIENTE
        public void AgregarCliente(Cliente cliente)
        {
            //ESTABLECER LA CONEXION CON LA BASE DE DATOS
            string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                //ABRIMOS LA CONEXION CON LA BASE DE DATOS
                conn.Open();
                //INSTANCIAMOS UN SQLCOMMAND PARA ACCEDER AL STOREDPROCEDURE DE LA BASE DE DATOS
                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "insertar_cliente";
                comm.CommandType = CommandType.StoredProcedure;
                //INSERTAMOS LOS DATOS A TRAVEZ DE LOS PARAMETROS DEL PROCEDURE
                comm.Parameters.Add(new SqlParameter("@nombre", cliente.Nombre));
                comm.Parameters.Add(new SqlParameter("@apellido", cliente.Apellido));
                comm.Parameters.Add(new SqlParameter("@fecnac", cliente.Fecnac));
                comm.Parameters.Add(new SqlParameter("@domicilio", cliente.Domicilio));
                comm.Parameters.Add(new SqlParameter("@pisodpto", cliente.Pisodpto));
                comm.Parameters.Add(new SqlParameter("@telefono", cliente.Telefono));
                comm.Parameters.Add(new SqlParameter("@cpostal", cliente.Cpostal));
                comm.Parameters.Add(new SqlParameter("@cuil", cliente.Cuil));
                comm.Parameters.Add(new SqlParameter("@provincia", cliente.Provincia));
                comm.Parameters.Add(new SqlParameter("@ciudad", cliente.Ciudad));
                //comm.Parameters.Add(new SqlParameter("@cuenta_id", cliente.Cuenta_id));
                //comm.Parameters.Add(new SqlParameter("@foto_dni_frente", cliente.Foto_dni_frente));
                //comm.Parameters.Add(new SqlParameter("@foto_dni_reversa", cliente.Foto_dni_reversa));

                //EJECUTAMOS LA QUERY
                comm.ExecuteNonQuery();
            }
        }
        //CREAMOS EL METODO OBTENER CLIENTE POR ID CON EL ID COMO PARAMETRO
        public Cliente ObtenerClienteID(int id_cliente)
        {
            //INSTACIAMOS UNA VARIABLE CLIENTE VACIA
            Cliente cliente = null;
            //REALIZAMOS LA CONEXION A LA BASE DE DATOS
            string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                //ABRIMOS LA CONEXION A LA BASE DE DATOS
                conn.Open();

                //INSTANCIAMOS UN SQLCOMMAND PARA ACCEDER A LA STORE PROCEDURE DE LA BASE DE DATOS
                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "obtener_clienteID";
                comm.CommandType = CommandType.StoredProcedure;
                //BUSCAMOS EL ID DEL CLIENTE POR PARAMETRO DEL PROCEDURE
                comm.Parameters.Add(new SqlParameter("@id_cliente", id_cliente));
                //INSTANCIAMOS UN SQLREADER PARA LEER LOS DATOS
                SqlDataReader dr = comm.ExecuteReader();
                //LEEMOS LOS DATOS
                if (dr.Read())
                {
                    string nombre = dr.GetString(1).Trim();
                    string apellido = dr.GetString(2).Trim();
                    DateTime fecnac = dr.GetDateTime(3).Date;
                    string domicilio = dr.GetString(4).Trim();
                    string pisodpto = dr.GetString(5).Trim();
                    string telefono = dr.GetString(6).Trim();
                    string cpostal = dr.GetString(7).Trim();
                    string cuil = dr.GetString(8).Trim();
                    int provincia = dr.GetInt32(9);
                    int ciudad = dr.GetInt32(10);
                    //int cuenta_id = dr.GetInt32(11);
                    //string foto_dni_frente = dr.GetString(12).Trim();
                    //string foto_dni_reversa = dr.GetString(13).Trim();

                    //CARGAMOS LOS DATOS EN LA VARIABLE CLIENTE
                    cliente = new Cliente(id_cliente, nombre, apellido, fecnac, domicilio, pisodpto, telefono, cpostal, cuil, provincia, ciudad /*cuenta_id, foto_dni_frente, foto_dni_reversa*/);
                }
                //CERRAMOS EL READ
                dr.Close();
            }
            //DEVOLVEMOS EL CLIENTE CON LOS DATOS
            return cliente;
        }
        //CREAMOS EL METODO LISTA OBTENER CLIENTES
        public List<Cliente> ObtenerClientes()
        {
            //CREAMOS UNA LISTA
            List<Cliente> lista = new List<Cliente>();
            //INSTANCIAMOS LA CONEXCION CON LA BASE DE DATOS
            string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(connection))
            {
                //ABRIMOS LA CONEXCION CON LA BASE DE DATOS
                conn.Open();
                //INSTANCIAMOS UN SQLCOMMAND PARA ACCEDER A LA STORE PROCEDURE DE LA DB
                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "obtener_cliente";
                comm.CommandType = CommandType.StoredProcedure;
                //INSTANCIAMOS UN SQLDATAREADER Y LO EJECUTAMOS
                SqlDataReader dr = comm.ExecuteReader();
                while (dr.Read())
                {
                    int id_cliente = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();
                    string apellido = dr.GetString(2).Trim();
                    DateTime fecnac = dr.GetDateTime(3).Date;
                    string domicilio = dr.GetString(4).Trim();
                    string pisodpto = dr.GetString(5).Trim();
                    string telefono = dr.GetString(6).Trim();
                    string cpostal = dr.GetString(7).Trim();
                    string cuil = dr.GetString(8).Trim();
                    int provincia = dr.GetInt32(9);
                    int ciudad = dr.GetInt32(10);
                    //int cuenta_id = dr.GetInt32(11);
                    //string foto_dni_frente = dr.GetString(12).Trim();
                    //string foto_dni_reversa = dr.GetString(13).Trim();


                    //CARGAMOS LOS DATOS EN LA VARIABLE CLIENTE Y AGREGAMOS LA VARIABLE CLIENTE CON LOS DATOS A LA LISTA  
                    Cliente cliente = new Cliente(id_cliente, nombre, apellido, fecnac, domicilio, pisodpto, telefono, cpostal, cuil, provincia, ciudad /*cuenta_id, foto_dni_frente, foto_dni_reversa*/);
                    lista.Add(cliente);
                }
                //CERRAMOS EL READER
                dr.Close();
            }
            //RETORNAMOS LA LISTA
            return lista;
        }
        //CREAMOS EL METODO ELIMINAR CLIENTE CON EL ID COMO PARAMETRO
        public void Eliminar(int id_cliente)
        {
            //CONECTAMOS CON LA DB
            string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(connection))
            {
                //ABRIMOS CONEXION CON LA DB
                conn.Open();
                //INSTANACIAMOS EL SQLCOMMAND PARA ACCEDER AL STORE PROCEDURE DE LA DB
                SqlCommand comm = new SqlCommand("eliminar_cliente", conn);
                comm.CommandType = System.Data.CommandType.StoredProcedure;
                //PASAMOS LA ID POR PARAMETROS DEL PROCEDURE DE LA DB
                comm.Parameters.Add(new SqlParameter("@id_cliente", id_cliente));
                //EJECUTAMOS LA QUERY
                comm.ExecuteNonQuery();
            }

        }
        //CREAMOS EL METODO PARA UPDATEAR CLIENTES
        public void UpdateCliente(Cliente cliente)
        {
            //CONECTAMOS CON LA DB
            string connection = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                //ABRIMOS CONEXION
                conn.Open();
                //INSTANCIAMOS EL SQLCOMMAND PARA ACCEDER A LA STORED PROCEDURE DE LA DB
                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "update_cliente";
                comm.CommandType = CommandType.StoredProcedure;
                //CARGAMOS LOS DATOS POR PARAMETROS DE LA PROCEDURE DE LA DB
                comm.Parameters.Add(new SqlParameter("@domicilio", cliente.Domicilio));
                comm.Parameters.Add(new SqlParameter("@pisodpto", cliente.Pisodpto));
                comm.Parameters.Add(new SqlParameter("@telefono", cliente.Telefono));
                comm.Parameters.Add(new SqlParameter("@cpostal", cliente.Cpostal));
                comm.Parameters.Add(new SqlParameter("@provincia", cliente.Provincia));
                comm.Parameters.Add(new SqlParameter("@ciudad", cliente.Ciudad));
                //EJECUTAMOS LA QUERY
                comm.ExecuteNonQuery();
            }
        }

    }

}
