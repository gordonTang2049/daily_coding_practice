Create table If Not Exists Weather (Id int, RecordDate date, Temperature int);
insert into Weather (Id, RecordDate, Temperature) values ('1', '2015-01-01', '10');
insert into Weather (Id, RecordDate, Temperature) values ('2', '2015-01-02', '25');
insert into Weather (Id, RecordDate, Temperature) values ('3', '2015-01-03', '20');
insert into Weather (Id, RecordDate, Temperature) values ('4', '2015-01-04', '30');
Truncate table Weather

-- Algorithm
-- MySQL uses DATEDIFF to compare two date type values.

-- So, we can get the result by 
-- joining this table weather with itself 
-- and use this DATEDIFF() function.


SELECT
    weather.id AS 'Id'
FROM
    weather
        JOIN
    weather w ON DATEDIFF(weather.date, w.date) = 1
        AND weather.Temperature > w.Temperature
;


SELECT 
    RecordDate
from 
    weather 
        Join 
    weather w ON 

PostgreSQL does not provide DATEDIFF function similar to SQL Server DATEDIFF, 
but you can use various expressions or UDF to get the same results.

SQL Server and Sybase	PostgreSQL
Years	DATEDIFF(yy, start, end)	DATE_PART('year', end) - DATE_PART('year', start)
Months	DATEDIFF(mm, start, end)	years_diff * 12 + (DATE_PART('month', end) - DATE_PART('month', start))
Days	DATEDIFF(dd, start, end)	DATE_PART('day', end - start)
Weeks	DATEDIFF(wk, start, end)	TRUNC(DATE_PART('day', end - start)/7)
Hours	DATEDIFF(hh, start, end)	days_diff * 24 + DATE_PART('hour', end - start )
Minutes	DATEDIFF(mi, start, end)	hours_diff * 60 + DATE_PART('minute', end - start )
Seconds	DATEDIFF(ss, start, end)	minutes_diff * 60 + DATE_PART('minute', end - start )

Select DATEDIFF(day, weather.RecordDate, W.RecordDate) =2 from weather;

SELECT 
    recorddate 
FROM
    weather
JOIN
    weather w
ON
    days_diff * 24 + DATE_PART('hour', W.RecordDate-weather.recorddate);

-- ============================================================

CREATE TABLE dbo.Duration  
    (startDate datetime2, endDate datetime2);  
    
INSERT INTO dbo.Duration(startDate, endDate)  
    VALUES ('2007-05-06 12:10:09', '2007-05-07 12:10:09');  
    
SELECT DATEDIFF(day, startDate, endDate) AS 'Duration'  
    FROM dbo.Duration;  
-- Returns: 1  


-- ON  => on means on what condition

-- My answer for PSQL====================================================
SELECT
    weather.id AS "Id"
FROM 
    weather
JOIN 
    weather w 
ON 
    DATE_PART('day', weather.recorddate::date) - DATE_PART('day', w.recorddate::date) = 1
AND
    weather.Temperature > w.Temperature;

-- My answer for MySQL
SELECT
    weather.id AS 'Id'
FROM
    weather
        JOIN
    weather w ON DATEDIFF(weather.recorddate, w.recorddate) = 1
        AND weather.Temperature > w.Temperature
;