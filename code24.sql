Create table If Not Exists Person (Id int, Email varchar(255));
insert into Person (Id, Email) values ('1', 'a@b.com');
insert into Person (Id, Email) values ('2', 'c@d.com');
insert into Person (Id, Email) values ('3', 'a@b.com');

Truncate table Person


e.g.

SELECT name, COUNT(email) 
FROM users
GROUP BY email
HAVING COUNT(email) > 1
So if we have a table

ID   NAME   EMAIL
1    John   asd@asd.com
2    Sam    asd@asd.com
3    Tom    asd@asd.com
4    Bob    bob@asd.com
5    Tom    asd@asd.com

SELECT Email, COUNT(email) 
FROM users
GROUP BY email
HAVING COUNT(email) > 1

SELECT
    name, email, COUNT(*)
FROM
    users
GROUP BY
    name, email
HAVING 
    COUNT(*) > 1


Simply group on both of the columns.
-- =========================================

SELECT ID, COUNT(email) 
FROM person
GROUP BY email
HAVING COUNT(email) > 1

-- select display 
-- From what table
-- Group by the same country or same name or 

-- group by => select unqiue

SELECT
    id, email
FROM
    person
GROUP BY
    id, email
HAVING 
    COUNT(email) > 1

-- ========================
SELECT
    email
FROM
    person
GROUP BY
    email

-- answer
select Email
from Person
group by Email
having count(Email) > 1;