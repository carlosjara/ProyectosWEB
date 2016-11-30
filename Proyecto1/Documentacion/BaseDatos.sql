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
    cupo int
);
/*
	1 habitacion tipo suite y
	0 habitacion tipo clasic
*/
insert into Hotel.Habitacion (Tipo_Habitacion, cupo) values (1, 4);
insert into Hotel.Habitacion(Tipo_Habitacion, cupo) values (0, 3);

create table Hotel.Reserva(
	reserva_id integer primary key auto_increment,
    estado_reserva varchar(32),
    fecha_inicio varchar(16),
    fecha_fin varchar(16),
    habitacion integer , 
    usuario integer,
    constraint foreign key (usuario) references Hotel.Usuarios(usuario_id),
    constraint foreign key (habitacion) references Hotel.Habitacion(Habitacion_id)
);

insert into Hotel.Reserva (estado_reserva,fecha_inicio, fecha_fin, habitacion,usuario) values ("Completa",'2016-11-29','2016-11-30',1,1);