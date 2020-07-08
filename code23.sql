Truncate table Customers
Truncate table Orders
Create table If Not Exists Customers (Id int, Name varchar(255));
Create table If Not Exists Orders (Id int, CustomerId int);
insert into Customers (Id, Name) values ('1', 'Joe');
insert into Customers (Id, Name) values ('2', 'Henry');
insert into Customers (Id, Name) values ('3', 'Sam');
insert into Customers (Id, Name) values ('4', 'Max');
insert into Orders (Id, CustomerId) values ('1', '3');
insert into Orders (Id, CustomerId) values ('2', '1');



SELECT
     a.NAME AS Employee
FROM Employee AS a JOIN Employee AS b
     ON a.ManagerId = b.Id
     AND a.Salary > b.Salary
;


-- $SQL = "SELECT a.id, a.invdate
-- ,b.name, a.amount
-- ,a.tax,a.total,a.note 
-- FROM invheader a, clients b 
-- WHERE a.client_id=b.client_id 
-- ORDER BY $sidx $sord LIMIT $start , $limit";

-- MY Answer
SELECT 
    a.Name AS "Customers"
From 
    Customers AS a JOIN Orders AS b
    ON a.Id NOT b.CustomerId
;

-- solution
select customers.name as "Customers"
from customers
where customers.id not in
(
    select customerid from orders
);

