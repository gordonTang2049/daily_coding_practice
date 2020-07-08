Create table employee (Id int, salary int);

-- 4 ways to get nth highest 

    -- 1. By using correlated Subquery

    -- 2. By using ROW_NUMBER() window function

    -- 3. By using Top keyword in Ms SQL Server

    -- 4. By using LIMIT keyword in MySQL database

-- =============================================
-- My answer for nth salary

SELECT salary FROM 
-- #Employee e1 
    WHERE 
N-1 = (SELECT COUNT(DISTINCT salary) 
    FROM 
    -- #Employee e2 
    WHERE 
e2.salary > e1.salary)

SELECT salary FROM 
    employee e1
WHERE    
    N-1 = (SELECT COUNT(DISTINCT salary)
            FROM
            employee e2
            WHERE
            e2.salary > e1.salary
           );


-- ====================================================

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
SELECT salary FROM 
    employee e1
WHERE    
    N-1 = (SELECT COUNT(DISTINCT salary)
            FROM
            employee e2
            WHERE
            e2.salary > e1.salary
      );
END

-- PSQL
-- RETURNS => what is col to OUTPUT 
CREATE or REPLACE FUNCTION 
    getNthHighestSalary(N integer) 
RETURNS 
    integer AS $salary$
BEGIN
    
        SELECT salary FROM 
        employee e1
    WHERE    
        N-1 = (SELECT COUNT(DISTINCT salary)
                FROM
                employee e2
                WHERE
                e2.salary > e1.salary    
      );

END 
$salary$ LANGUAGE plpgsql;


--  Specify to use, what language
--  Function f1() - language sql
--  create or replace function f1(istr  varchar) returns text as $$ 
--  select 'hello! '::varchar || istr;
--  $$ language sql;

-- Function f2() - language plpgsql
--  create  or replace function f2(istr  varchar)
--  returns text as $$ 
--  begin select 'hello! '::varchar || istr; end;
--  $$ language plpgsql;

-- e.g.
-- CREATE or Replace function total()
-- returns integer as $total$
-- declare
-- total integer
-- begin
-- select count(*) into total from company
-- return total
-- end 
-- $total$ language plpgsql

-- Top 10 score TABLE
-- select *
-- from scores
-- order by score desc
-- limit 10

-- Create function in PSQL 
CREATE FUNCTION populate() RETURNS integer AS $$
DECLARE
    -- declarations
BEGIN
    PERFORM my_function();
END;
$$ LANGUAGE plpgsql;


-- E.g.
CREATE FUNCTION populate() 
              -- means name of body of a function 
RETURNS integer AS $populate$  -- it could be $$
DECLARE -- normal declare of variable means  var abc = 123
    total integer  -- Int total 
BEGIN
    select count(*) INTO total FROM company
    return total
END;
$$ LANGUAGE plpgsql;

-- Select into => populate column to 
-- Copy data from on table to another 


Select *   -- Select everything
INTO employee_list -- copy to table employee_list 
From Employee  -- from table employee


INSERT INTO employee_list (col 1, col 2)  -- this is specify column
SELECT *
FROM employee ;


SELECT * INTO 
CustomersBackup2017 -- Copy table 
IN -- In what database
'Backup.mdb'
FROM Customers;


[ <<label>> ]
[ DECLARE
    declarations ]
BEGIN
    statements
EXCEPTION
    WHEN condition [ OR condition ... ] THEN
        handler_statements
    [ WHEN condition [ OR condition ... ] THEN
          handler_statements
      ... ]
END;


-- 40.6.7. Obtaining Execution Location Information
-- The GET DIAGNOSTICS command, previously described in Section 40.5.5, 
-- retrieves information about current execution 
-- state (whereas the GET STACKED DIAGNOSTICS command discussed above reports information about the execution 
-- state as of a previous error). Its PG_CONTEXT status item is useful for identifying the current execution location. 
-- PG_CONTEXT returns a text string with line(s) of text describing the call stack. 
-- The first line refers to the current function and currently executing GET DIAGNOSTICS command. 
-- The second and any subsequent lines refer to calling functions further up the call stack. For example:

CREATE OR REPLACE FUNCTION outer_func() RETURNS integer AS $$
BEGIN
  RETURN inner_func();
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION inner_func() RETURNS integer AS $$
DECLARE
  stack text;
BEGIN
  GET DIAGNOSTICS stack = PG_CONTEXT;

  RAISE NOTICE E'--- Call Stack ---\n%', stack;

  RETURN 1;

END;
$$ LANGUAGE plpgsql;



SELECT outer_func();

NOTICE:  --- Call Stack ---
PL/pgSQL function inner_func() line 5 at GET DIAGNOSTICS
PL/pgSQL function outer_func() line 3 at RETURN
CONTEXT:  PL/pgSQL function outer_func() line 3 at RETURN

 outer_func
 ------------
           1
(1 row)

-- ============================================================================
CREATE TABLE db (a INT PRIMARY KEY, b TEXT);

CREATE FUNCTION merge_db(key INT, data TEXT) RETURNS VOID AS
$$
BEGIN
    LOOP
        -- first try to update the key
        UPDATE db SET b = data WHERE a = key;
        IF found THEN
            RETURN;
        END IF;
        -- not there, so try to insert the key
        -- if someone else inserts the same key concurrently,
        -- we could get a unique-key failure
        BEGIN
            INSERT INTO db(a,b) VALUES (key, data);
            RETURN;
        EXCEPTION WHEN unique_violation THEN
            -- Do nothing, and loop to try the UPDATE again.
        END;
    END LOOP;
END;
$$
LANGUAGE plpgsql;

SELECT merge_db(1, 'david');
SELECT merge_db(1, 'dennis');


-- ==========================================================================
CREATE FUNCTION refresh_mviews() RETURNS integer AS $$  
DECLARE
    mviews RECORD;
BEGIN
    RAISE NOTICE 'Refreshing all materialized views...';
    FOR mviews IN
       SELECT n.nspname AS mv_schema,
              c.relname AS mv_name,
              pg_catalog.pg_get_userbyid(c.relowner) AS owner
         FROM pg_catalog.pg_class c
    LEFT JOIN pg_catalog.pg_namespace n ON (n.oid = c.relnamespace)
        WHERE c.relkind = 'm'
     ORDER BY 1
    LOOP

        -- Now "mviews" has one record with information about the materialized view

        RAISE NOTICE 'Refreshing materialized view %.% (owner: %)...',
                     quote_ident(mviews.mv_schema),
                     quote_ident(mviews.mv_name),
                     quote_ident(mviews.owner);
        EXECUTE 'REFRESH MATERIALIZED VIEW ' || quote_ident(mviews.mv_schema)
                      || '.' || quote_ident(mviews.mv_name);
    END LOOP;

    RAISE NOTICE 'Done refreshing materialized views.';
    RETURN 1;
END;
$$ LANGUAGE plpgsql;

-- ===========================================================================

-- There are two commands available 
-- that allow you to return data from a function: 
-- RETURN and RETURN NEXT.

INSERT INTO employee (id, salary) Values (5, 500) ;


CREATE FUNCTION get_available_flightid(date) RETURNS SETOF integer AS
$BODY$
BEGIN
    RETURN QUERY SELECT flightid
                   FROM flight
                  WHERE flightdate >= $1
                    AND flightdate < ($1 + 1);

    -- Since execution is not finished, we can check whether rows were returned
    -- and raise exception if not.
    IF NOT FOUND THEN
        RAISE EXCEPTION 'No flight at %.', $1;
    END IF;

    RETURN;
 END
$BODY$
LANGUAGE plpgsql;

-- Returns available flights or raises exception if there are no
-- available flights.
SELECT * FROM get_available_flightid(CURRENT_DATE);

-- ===========================================================
CREATE FUNCTION get_available_flightid(date) 
RETURNS 
SETOF 
integer 
AS
$BODY$
BEGIN
    RETURN QUERY SELECT flightid
                   FROM flight
                  WHERE flightdate >= $1
                    AND flightdate < ($1 + 1);

    -- Since execution is not finished, we can check whether rows were returned
    -- and raise exception if not.
    IF NOT FOUND THEN
        RAISE EXCEPTION 'No flight at %.', $1;
    END IF;

    RETURN;
 END
$BODY$
LANGUAGE plpgsql;
-- ==================================================================



CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      
  );
END


CREATE FUNCTION 
    gettest(INT) 
RETURNS 
    SETOF 
integer 
AS
$$
BEGIN
    RETURN QUERY SELECT 
                    salary
                 FROM
                    employee
                WHERE
                     salary > 200;
IF NOT FOUND THEN 
            RAISE EXCEPTION 'No salary at %.', $1;
END IF
RETURN;
END
$$
LANGUAGE plpgsql;


CREATE FUNCTION test_add_sum (x INT, y INT, OUT sum int)
AS 'SELECT x + y'
LANGUAGE SQL;


