
-- Create table If Not Exists Employee (Id int, Name varchar(255), Salary int, ManagerId int)

-- Truncate table Employee

-- insert into Employee (Id, Name, Salary, ManagerId) values ('1', 'Joe', '70000', 3);
-- insert into Employee (Id, Name, Salary, ManagerId) values ('2', 'Henry', '80000', 4);
-- insert into Employee (Id, Name, Salary, ManagerId) values ('3', 'Sam', '60000', null );
-- insert into Employee (Id, Name, Salary, ManagerId) values ('4', 'Max', '90000', null );

+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+

-- Sam is Joe's manager   => Manager id  

-- seperate two scope  and then match it with ID and ManagerId
-- and then compare Salary
SELECT
     a.NAME AS Employee
FROM Employee AS a JOIN Employee AS b
     ON a.ManagerId = b.Id
     AND a.Salary > b.Salary
;



-- $SQL = "SELECT a.id, a.invdate, b.name, a.amount,a.tax,a.total,a.note FROM invheader a, clients b WHERE a.client_id=b.client_id ORDER BY $sidx $sord LIMIT $start , $limit";
-- a => alias of invheader
-- b => alias of clients 

-- The dot(.) is used to separate the board scope.So Songs.songId mean that first 
-- find the table named Songs and then in the Songs table find the field named songId.

-- find table name Songs  => field named songId.