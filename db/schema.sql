-- FOR TESTING PURPOSES - DELETE IN SUBMISSION
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(255) DEFAULT "Burger",
  devoured BOOLEAN DEFAULT false,
  primary key (id)
);