create table vendors(
    id serial primary KEY,
    name VARCHAR(30),
    website VARCHAR(100)
);

create table items(
    id serial primary key,
    name VARCHAR(100),
    vendorId integer references vendors(id)
);

create table clients(
    id serial primary key,
    name varchar(30)
);

create table clientItems(
    clientId integer references clients(id),
    itemId integer references items(id),
    quantity integer
);

select * from items;
select * from vendors;
select * from clients;
select * from clientItems;

drop table clientItems;
drop table items;
drop table vendors;
drop table clients;

select clients.NAME as client, items.name as Item, clientItems.quantity, vendors.website from clients join clientItems 
on clientItems.clientId = id join items
on clientItems.itemId = items.id join vendors 
on items.vendorId = vendors.id

