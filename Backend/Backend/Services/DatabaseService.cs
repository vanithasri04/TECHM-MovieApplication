using MySql.Data.MySqlClient;
using System.Data;

namespace YourNamespace.Services
{
    public class DatabaseService(IConfiguration configuration)
    {
#pragma warning disable CS8601 // Possible null reference assignment.
        private readonly string _connectionString = configuration.GetConnectionString("DefaultConnection");
#pragma warning restore CS8601 // Possible null reference assignment.

        public async Task<bool> ExecuteNonQueryAsync(string query, Dictionary<string, object> parameters)
        {
            using var conn = new MySqlConnection(_connectionString);
            await conn.OpenAsync();

            using var cmd = new MySqlCommand(query, conn);
            foreach (var param in parameters)
            {
                cmd.Parameters.AddWithValue(param.Key, param.Value);
            }

            int result = await cmd.ExecuteNonQueryAsync();
            return result > 0;
        }
    }
}
