CREATE DATABASE MovieDB;
USE MovieDB;
CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL
);
CREATE TABLE Movies (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Genre VARCHAR(100),
    ReleaseYear INT
);

CREATE TABLE WatchLater (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT,
    MovieId INT,
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY (MovieId) REFERENCES Movies(Id) ON DELETE CASCADE
);



INSERT INTO Movies (Title, Description, Genre, ReleaseYear) VALUES
('Inception', 'A thief who enters the dreams of others to steal secrets.', 'Sci-Fi', 2010),
('Interstellar', 'A team of explorers travel through a wormhole in space.', 'Sci-Fi', 2014),
('The Dark Knight', 'Batman faces off against the Joker in Gotham City.', 'Action', 2008),
('Titanic', 'A love story unfolds aboard the ill-fated Titanic.', 'Romance', 1997),
('Avengers: Endgame', 'The Avengers assemble to undo the damage by Thanos.', 'Action', 2019);
select*from users;
DESC Movies;

select*from movies;
SHOW TABLES;
ALTER TABLE Movies ADD ImageUrl VARCHAR(500);
SELECT Id, Title FROM Movies;
UPDATE Movies 
SET ImageUrl = 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg' 
WHERE Id = 1;

UPDATE Movies SET ImageUrl = 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg' WHERE Id = 2;
UPDATE Movies SET ImageUrl = 'https://m.media-amazon.com/images/I/71pox3i1c+L._AC_SL1178_.jpg' WHERE Id= 3;
UPDATE Movies SET ImageUrl = 'https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SL1024_.jpg' WHERE Id = 4;
UPDATE Movies SET ImageUrl = 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg' WHERE Id= 5;

ALTER TABLE Movies DROP COLUMN ImageUrl;
SELECT * FROM Users;


SELECT * FROM Movies;

SELECT * FROM Users WHERE Id = 1665;


