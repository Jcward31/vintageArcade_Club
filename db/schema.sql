-- Drop db if exists
CREATE DATABASE IF NOT EXISTS gamer;


CREATE TABLE favorites
(
   id INT AUTO_INCREMENT NOT NULL,
   game_name VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);