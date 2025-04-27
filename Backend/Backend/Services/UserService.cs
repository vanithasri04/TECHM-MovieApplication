using MovieApp.Models;
using MySql.Data.MySqlClient;

namespace MovieApp.Services
{
    public class UserService(IConfiguration config)
    {
#pragma warning disable CS8601 // Possible null reference assignment.
        private readonly string _connectionString = config.GetConnectionString("DefaultConnection");
#pragma warning restore CS8601 // Possible null reference assignment.

        public bool Register(User user)
        {
            using var con = new MySqlConnection(_connectionString);
            con.Open();

            var cmd = new MySqlCommand("INSERT INTO Users ( Email, Password) VALUES ( @Email, @Password)", con);
            cmd.Parameters.AddWithValue("@Email", user.Email);
            cmd.Parameters.AddWithValue("@Password", user.PasswordHash); // Store as hash in real apps

            return cmd.ExecuteNonQuery() > 0;
        }

        public User? Login(string email, string password)
        {
            using var con = new MySqlConnection(_connectionString);
            con.Open();

            var cmd = new MySqlCommand("SELECT * FROM Users WHERE Email=@Email AND Password=@Password", con);
            cmd.Parameters.AddWithValue("@Email", email);
            cmd.Parameters.AddWithValue("@Password", password);

            using var reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                return new User
                {
                    Id = Convert.ToInt32(reader["Id"]),
                    Email = reader["Email"].ToString() ?? "",
                };
            }
            return null;
        }
    }
}
