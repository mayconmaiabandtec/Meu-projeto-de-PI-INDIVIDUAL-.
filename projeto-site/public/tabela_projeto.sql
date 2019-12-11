create database newyork;
create table newyork.usuario(
idusuario int primary key auto_increment,
nome varchar (40),
email varchar (40) unique,
senha varchar (40)
);

 



