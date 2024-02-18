-- Tabla para almacenar información de usuarios
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);
-- Tabla para almacenar información de citas
CREATE TABLE Citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_apellido VARCHAR(255) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    correo_electronico VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL
);

-- Tabla para almacenar información de emergencias
CREATE TABLE Consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_apellido VARCHAR(255) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    correo_electronico VARCHAR(255) NOT NULL,
    consulta VARCHAR(300) NOT NULL
);

-- Tabla para almacenar los videos
CREATE TABLE Videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    breve_descripcion VARCHAR(300) NOT NULL
);
