CREATE SCHEMA stockdb DEFAULT CHARACTER SET utf8 ;
 USE stockdb;
  CREATE TABLE colores (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(65) NOT NULL,
    createdAt DATE NULL,
    updatedAt DATE NULL,
    PRIMARY KEY (id) 
    );   
  CREATE TABLE articulos (
    id INT NOT NULL AUTO_INCREMENT,
    modelo VARCHAR(100) NOT NULL,
    color_id INT NOT NULL,
    categorie VARCHAR(50) NULL,
    status ENUM('active', 'inactive') NULL,
    createdAt DATE NULL,
    updatedAt DATE NULL,
    PRIMARY KEY (id)
    );
  CREATE TABLE autores (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NULL,
    createdAt DATE NULL,
    updatedAt DATE NULL,
    PRIMARY KEY (id) 
    );