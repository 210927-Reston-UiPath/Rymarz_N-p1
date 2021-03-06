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

select clients.name as "Client",orderDate, items.name from failedOrders join clientItems
on orderId = clientItems.id join clients
on clientItems.clientId = clients.id join items
on clientItems.itemId = items.id

select clients.NAME as Client, items.name as item, quantity, subtotal, orderDate from expenses join clientitems
on orderId = clientItems.id join clients
on clientItems.clientId = clients.Id join items
on clientItems.itemId = items.id
where clientId = 1 and orderDate = '2021-10-23'

select items.name from failedOrders join clientItems on
failedOrders.orderId = clientItems.id join items on 
items.id = clientItems.itemId join clients
on clientItems.clientId = clients.id 
where clients.name = 'John' and failedOrders.orderDate = '10-26-2021'


select clients.name as client, subtotal from expenses join clientItems
on orderId = clientItems.id join clients
on clientItems.clientId = clients.id

select clients.NAME as Client, sum(subtotal) as TotalPrice from expenses join clientitems
on orderId = clientItems.id join clients
on clientItems.clientId = clients.Id
where clientId = 1 and orderDate = '2021-10-23'
group by client


drop table expenses;
drop table failedOrders;
drop table clientItems;
drop table items;
drop table vendors;
drop table clients;


select clients.NAME as client, items.name as Item, clientItems.quantity, vendors.website, clientItems.id from clients join clientItems 
on clientItems.clientId = clients.id join items
on clientItems.itemId = items.id join vendors 
on items.vendorId = vendors.id;

select clients.NAME as Client, sum(subtotal) as TotalPrice from expenses join clientitems
on orderId = clientItems.id join clients
on clientItems.clientId = clients.Id
where clientItems.itemId > 20
group by client;

select max(id) from clients 

Select distinct(orderDate) from expenses join clientItems on expenses.orderId = clientItems.id join clients on clientItems.clientId = clients.id where clients.Name = 'John'

