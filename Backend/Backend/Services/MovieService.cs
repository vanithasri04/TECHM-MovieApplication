using MySql.Data.MySqlClient;
using System.Collections.Generic;
using YourNamespace.Models;

namespace YourNamespace.Services
{
    public class MovieService(IConfiguration configuration)
    {
#pragma warning disable CS8601 // Possible null reference assignment.
        private readonly string _connectionString = configuration.GetConnectionString("DefaultConnection");
#pragma warning restore CS8601 // Possible null reference assignment.

        public List<Movie> GetAllMovies()
        {
            var movies = new List<Movie>();

            using (var conn = new MySqlConnection(_connectionString))
            {
                conn.Open();
                var query = "SELECT * FROM Movies";
                using var cmd = new MySqlCommand(query, conn);
                using var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    movies.Add(new Movie
                    {
                        Id = reader.GetInt32("Id"),
                        Title = reader.GetString("Title"),
                        Description = reader.GetString("Description"),
                        Genre = reader.GetString("Genre"),
                        ReleaseYear = reader.GetInt32("ReleaseYear")
                    });
                }
            }

            return movies;
        }
    }
}
