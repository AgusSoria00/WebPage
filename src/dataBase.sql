show databases; 
use consultas;

CREATE TABLE usuario (
id INT UNSIGNED AUTO_INCREMENT,
nombre_completo VARCHAR(255),
telefono VARCHAR(20),
email VARCHAR(255),
fecha DATE,
hora TIME,
modalidad ENUM('presencial', 'videollamada', 'chat', 'a_domicilio'),	
PRIMARY KEY(id));

CREATE TABLE urgencia (
  id INT UNSIGNED AUTO_INCREMENT,
  nombre_completo VARCHAR(255),
  telefono VARCHAR(20),
  email VARCHAR(255),
  consulta TEXT VARCHAR(255),
  PRIMARY KEY(id)
);