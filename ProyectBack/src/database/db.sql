CREATE DATABASE Treyo;
CREATE TABLE USER (
    id int PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    usuario varchar(50),
    contrasena varchar(50)
)
CREATE TABLE BOARD (
    id int PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(30),
    autor int not null
)

CREATE TABLE TASK (
    id int PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(50),
    autor int not null,
    cuerpo text,
    prioridad int,
    idBoard int not null
)

ALTER TABLE TASK ADD FOREIGN KEY (autor) REFERENCES USER(id);
ALTER TABLE BOARD ADD FOREIGN KEY (autor) REFERENCES USER(id);
ALTER TABLE TASK ADD FOREIGN KEY (idBoard) REFERENCES BOARD(id);


