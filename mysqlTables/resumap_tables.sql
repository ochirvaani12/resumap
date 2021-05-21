-- drop database if exists --
drop database if exists resumap;

-- create database --
create database resumap;

-- create prime tables --
create table candidates (
	id varchar(200),
    firstName varchar(200),
    lastName varchar(200),
    avatar varchar(200),
    email varchar(200),
    phone varchar(200),
    location varchar(200),
    education varchar(200),
    primary key (id)
);

create table recruiter (
	id varchar(200),
    firstName varchar(200),
    lastName varchar(200),
    email varchar(200),
    avatar varchar(200),
    phone varchar(200),
    location varchar(200),
    createdById varchar(200),
    primary key (id)
);

create table login (
	id varchar(200),
    email varchar(200),
    password varchar(200),
    primary key (id)
);

create table role (
	id varchar(200),
    name varchar(200),
    primary key (id)
);