
    CREATE TABLE Employee (
    user_id serial PRIMARY KEY,
    Salary varchar(255));


    INSERT INTO Employee (salary) VALUES (100);
    INSERT INTO Employee (salary) VALUES (200);
    INSERT INTO Employee (salary) VALUES (300);


    SELECT MAX(Salary) AS "SecondHighestSalary"  From Employee WHERE Salary < ( SELECT Max(Salary) FROM Employee);