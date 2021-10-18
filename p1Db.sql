create table items(
    id serial primary key,
    name VARCHAR(100),
    price Numeric(100,2)
);

create table vendors(
    id serial primary KEY,
    name VARCHAR(30),
    website VARCHAR(100)
);

create table clients(
    id serial primary key,
    name varchar(30)
);

create table Inventory(
    vendorId integer REFERENCES vendors(id),
    itemId integer REFERENCES items(id)
);

create table clientItems(
    clientId integer references clients(id),
    itemId integer references items(id)
);

insert into items(name,price) VALUES
    ('sirop derable',28.5)

select * from items;
select * from vendors;
select * from clients;

drop table Inventory;
drop table clientItems;
drop table items;
drop table vendors;
drop table clients;

