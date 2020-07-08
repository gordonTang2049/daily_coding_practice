
-- Convert a value to an int datatype:
-- CAST(expression AS datatype(length))
-- Value	Description
-- expression	Required. The value to convert

-- datatype	Required. 
-- The datatype to convert expression to. 
-- Can be one of the following: bigint, int, smallint, tinyint, bit, decimal, numeric, money, smallmoney, float, real, datetime, smalldatetime, 
-- char, varchar, text, nchar, nvarchar, ntext, binary, varbinary, or image

-- (length)	Optional. 
-- The length of the resulting data type (for char, varchar, nchar,
--  nvarchar, binary and varbinary)


SELECT CAST(25.65 AS int);

-- basic 1 + whatever
CREATE OR REPLACE FUNCTION increment(i integer) RETURNS integer AS $$
        BEGIN
                RETURN i + 1;
        END;
$$ LANGUAGE plpgsql;

increment 
-----------
       101
(1 row)


-- ================================
-- same 
CREATE OR REPLACE FUNCTION dup(in int, out f1 int, out f2 text)
    AS $$ 
SELECT $1, CAST($1 AS text) || ' is text' $$
    LANGUAGE SQL;

SELECT * FROM dup(42);

f1 |     f2     
----+------------
 42 | 42 is text
(1 row)


-- explicit type for output
-- You can do the same thing 
-- more verbosely with an explicitly named composite type:

CREATE TYPE dup_result AS (f1 int, f2 text);

CREATE FUNCTION dup(int) RETURNS dup_result
    AS $$ SELECT $1, CAST($1 AS text) || ' is text' $$
    LANGUAGE SQL;

SELECT * FROM dup(42);


-- Another way to return multiple columns is to
-- use a TABLE function:

CREATE or REPLACE FUNCTION dup(int) RETURNS TABLE(f1 int, f2 text)
    AS $$ SELECT $1, CAST($1 AS text) || ' is text' $$
    LANGUAGE SQL;

SELECT * FROM dup(42);

-- ==================================


CREATE or REPLACE 
FUNCTION 
    getNthHighestSalary(N integer) 
RETURNS TABLE(salary integer)
    AS $salary$
BEGIN
RETURN QUERY (
    SELECT salary.employee FROM employee e1
    WHERE    
    N-1 = (SELECT COUNT(DISTINCT salary)
            FROM
            employee e2
            WHERE
            e2.salary > e1.salary    
      )
);
END 
$salary$ LANGUAGE plpgsql;


-- =================
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      
  );
END