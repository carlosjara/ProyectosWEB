CREATE SCHEMA `Hotel` DEFAULT CHARACTER SET utf8 ;
CREATE TABLE Hotel.Usuarios(
	usuario_id integer primary key auto_increment,
    name varchar(32),
    direccion varchar(64),
    telefono int
);

insert into Hotel.usuarios (name, direccion, telefono) values ("Camargo","Av. 123 # 456", 123456);
insert into Hotel.usuarios (name, direccion, telefono) values ("Jaramillo","Av. 312 # 654", 654321);
insert into Hotel.usuarios (name, direccion, telefono) values ("Rada","Av. 876 # 098", 098765);

create table Hotel.Habitacion(
	Habitacion_id integer primary key auto_increment,
    Tipo_Habitacion boolean,
    Estado_Habitacion varchar(32)
);
/*
	1 habitacion tipo suite y
	0 habitacion tipo clasic
*/
insert into Hotel.Habitacion (Tipo_Habitacion, Estado_Habitacion) values (1,"Reservada");
insert into Hotel.Habitacion(Tipo_Habitacion, Estado_Habitacion) values (0,"Disponible");

create table Hotel.Reserva(
	reserva_id integer primary key auto_increment,
    estado_reserva varchar(32),
    fecha_inicio date,
    fecha_fin date,
    habitacion integer , 
    usuario integer,
    constraint foreign key (usuario) references Hotel.Usuarios(usuario_id),
    constraint foreign key (habitacion) references Hotel.Habitacion(Habitacion_id)
);

insert into Hotel.Reserva (estado_reserva,fecha_inicio,habitacion,usuario) values ("Completa",'Jan-10-1999','Jan-10-1999',1,2);