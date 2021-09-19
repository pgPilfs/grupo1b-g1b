using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PILBackend.Models
{
    public class GestorCuenta
    {
        public Cuenta ObtenerCuenta(int id_cuenta)
        {
            Cuenta cuenta = null;
            Transaccion transaccion = null;


            string StrConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(StrConn))
            {
                conn.Open();

                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "obtener_cuenta";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id_cuenta", id_cuenta));

                SqlDataReader dr = comm.ExecuteReader();

                if (dr.Read())
                {
                    string cvu = dr.GetString(1).Trim();
                    double saldo = dr.GetDouble(2);
                    string email = dr.GetString(3).Trim();
                    string password = dr.GetString(4).Trim();
                    bool estado = dr.GetBoolean(5);

                    cuenta = new Cuenta(id_cuenta, cvu, saldo, email, password, estado);

                    comm = conn.CreateCommand();
                    comm.CommandText = "listar_ultimos_movimientos";
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.Parameters.Add(new SqlParameter("@idCuenta", id_cuenta));
                    dr.Close();
                    dr = comm.ExecuteReader();

                    while (dr.Read())
                    {
                        DateTime fecha_trans = dr.GetDateTime(1);
                        double monto = dr.GetDouble(2);
                        string cvuOrigen = dr.GetString(3).Trim();
                        string cvuDestino = dr.GetString(4).Trim();
                        string tipo_trans = dr.GetString(7).Trim();
                        transaccion = new Transaccion(fecha_trans, monto, cvuOrigen, cvuDestino, id_cuenta, tipo_trans);
                        cuenta.Transacciones.Add(transaccion);
                    }
                    dr.Close();

                }

            }

            return cuenta;
        }
    }
}