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
    id serial primary KEY,
    clientId integer references clients(id),
    itemId integer references items(id),
    quantity integer
);

create table expenses(
    orderId integer references clientItems(id),
    subtotal numeric(100,2),
    orderDate date
);

create table failedOrders(
    orderId integer references clientItems(id),
    orderDate date
)


select * from items;
select * from vendors;
select * from clients;
select * from clientItems;
select * from expenses;
select * from failedOrders

select clients.name as "Client",orderDate, clientItems.itemid from failedOrders join clientItems
on orderId = clientItems.id join clients
on clientItems.clientId = clients.id

select clients.NAME as Client, sum(subtotal) as TotalPrice from expenses join clientitems
on orderId = clientItems.id join clients
on clientItems.clientId = clients.Id
group by client

select clients.name as client, subtotal from expenses join clientItems
on orderId = clientItems.id join clients
on clientItems.clientId = clients.id


drop table expenses;
drop table failedOrders;
drop table clientItems;
drop table items;
drop table vendors;
drop table clients;


select clients.NAME as client, items.name as Item, clientItems.quantity, vendors.website, clientItems.id from clients join clientItems 
on clientItems.clientId = clients.id join items
on clientItems.itemId = items.id join vendors 
on items.vendorId = vendors.id

