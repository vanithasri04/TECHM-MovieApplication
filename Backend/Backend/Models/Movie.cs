namespace YourNamespace.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Genre { get; set; }
        public int ReleaseYear { get; set; }
    }
}
