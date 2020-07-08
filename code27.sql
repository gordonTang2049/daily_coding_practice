Create table Person (PersonId int, FirstName varchar(255), LastName varchar(255))
Create table Address (AddressId int, PersonId int, City varchar(255), State varchar(255));
insert into Person (PersonId, LastName, FirstName) values ('1', 'Wang', 'Allen');
insert into Person (PersonId, LastName, FirstName) values ('3', 'Wang', 'Allen');
insert into Address (AddressId, PersonId, City, State) values ('1', '2', 'New York City', 'New York');

Truncate table Person;
Truncate table Address;

Truncate table Employee;

Write a SQL query for a report that provides 
the following information for each person in the Person table, 
regardless if there is an address for each of those people:


-- Inner Join =======================================
-- An inner join focuses on the commonality between two tables. 
-- When using an inner join, 
-- there must be at least some matching data 
-- between two (or more) tables that are being compared. 

-- Inner Join match  both side of the data
-- ===================================================

-- Outer Join



-- WHERE vs ON

-- Return one line 
-- The first will return an order and its lines, 
-- if any, for order number 12345. 


SELECT *
FROM Orders
LEFT JOIN OrderLines ON OrderLines.OrderID=Orders.ID
WHERE Orders.ID = 12345

-- REturn any lines
-- The second will return all orders,
-- but only order 12345 will have any lines associated with it.

SELECT *
FROM Orders
LEFT JOIN OrderLines ON OrderLines.OrderID=Orders.ID 
    AND Orders.ID = 12345



-- Input --> The table
{"headers": {"Person": ["PersonId", "LastName", "FirstName"], 
"Address": ["AddressId", "PersonId", "City", "State"]}, 
"rows": {"Person": [[1, "Wang", "Allen"]], 
"Address": [[1, 2, "New York City", "New York"]]}}


-- If use Join
SELECT 
    firstname, lastname, city, state 
FROM 
    person
join
    address
On
   person.personId = address.personid;

-- if I use join, because it has no record match person.personId = address.personid;
-- it will show no value
-- Output  
{"headers": 
["firstname", "lastname", "city", "state"], 
"values": []}


-- if use left join 
-- it will show all the record on person.personId
SELECT 
    firstname, lastname, city, state 
FROM 
    person
Left join
    address
On
   person.personId = address.personid;

{"headers":["FirstName","LastName","City","State"],
"values":[["Allen","Wang",null,null]]}

-- IF use where instead of ON 
-- Note: Using where clause to filter 
-- the records will fail if there is no address information 
-- for a person 
-- because it will not display the name information.

    
