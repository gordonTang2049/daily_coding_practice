Create table If Not Exists PERSON (Id int, email VARCHAR(255));
insert into PERSON (Id, email) values ('1', 'john@example.com');
insert into PERSON (Id, email) values ('2', 'bob@example.com');
insert into PERSON (Id, email) values ('3', 'john@example.com');
insert into PERSON (Id, email) values ('4', 'john@example.com');
Truncate table PERSON;

-- PSQL
DELETE
    email, COUNT (email) 
FROM 
    person
GROUP BY 
    email
HAVING COUNT (email) > 1;


Write a SQL query to delete 
all duplicate email entries in a table named Person,
keeping only unique emails based on its smallest Id.


SELECT email,  COUNT (email) 
FROM person
GROUP BY email;


-- 

DELETE 
FROM 
    Person 
WHERE 
    Id 
NOT IN 
(SELECT * FROM(
            SELECT 
                MIN(Id) 
            FROM 
                Person 
            GROUP BY 
            Email
            ) 
-- You need  "as p" to kind of make another table
-- to delete some record 
as 
    p
);

-- ==================================================
-- This is more readable 
-- MySQL / psql

    DELETE FROM 
        Person 
    WHERE
        Id 
    NOT IN 
        (SELECT MIN(p.Id) 
    FROM 
        (SELECT * FROM Person) 
        p
    Group by
        p.Email);

