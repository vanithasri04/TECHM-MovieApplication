Welcome to the Movie Recommendation App — a full-stack web application crafted to recommend movies based on user preferences, with stunning visuals sourced from the TMDB API.

This project stands on the shoulders of proven enterprise technologies:
Angular for frontend brilliance, .NET for backend robustness, and MySQL for secure data storage.

Features
🎬 Dynamic movie recommendations based on user preferences.

🔍 Search for movies by title, genre, or rating.

⭐ Add movies to your personalized "Favorites" list.

📸 High-quality movie posters and images via TMDB API.

Responsive and mobile-friendly UI.

Secure communication between frontend and backend.

Clean architecture with modular code separation.

Technologies Used
Frontend:

Angular 16

HTML5, CSS3, TypeScript

Backend:

.NET 7 (ASP.NET Core Web API)

C#

Database:

MySQL

APIs & External Services:

TMDB API for movie data and images

Others:

Entity Framework Core for database interactions

RESTful API architecture

GitHub for version control

Installation and Setup Instructions

Frontend Setup (Angular)

# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into frontend folder
cd frontend

# Install frontend dependencies
npm install

# Run the Angular app
ng serve


Backend Setup (.NET Core)
bash
Copy code
# Navigate into backend folder
cd backend

# Restore backend dependencies
dotnet restore

### Database Setup (MySQL - Using .SQL File)

- Install and configure **MySQL Server** locally.
- Create a new empty database (for example, `MovieAppDB`).

- Import the provided `.sql` file to create tables and insert initial data:
 
  ```bash
  mysql -u root -p MovieAppDB < path/to/your/movies.sql



Update the connection string in your backend appsettings.json

# Run the .NET backend server
dotnet run



Environment Variables
Create an .env file or add the following settings (securely) for your backend and frontend:

TMDB_API_KEY = Your TMDB API key

(Ensure API keys are NOT committed into the repository.)


Future Roadmap
User authentication and login system (JWT-based)

AI-powered recommendation engine (using ML models)

User profile pages

Reviews and ratings for movies

Dark mode toggle

Deployment to Azure/AWS




Acknowledgements
TMDB API for providing movie data and images

Angular and ASP.NET Core development communities

Open source developers who inspire daily innovation






