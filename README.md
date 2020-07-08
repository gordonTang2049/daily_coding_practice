# Code Challenge 1 - encrpy Message// Alternating Split
 For building the encrypted string:

 Take every 2nd character from the string,
 then the other characters that are not every 2nd character,

 and concat them as a new String.
 Do this n times!
 To do the above, you must build an encrypt(message, n) method
 that performs like this:

 encrypt("This is a test!", 1) -> "hsi  etTi sats!"
 encrypt("This is a test!", 2) -> "s eT ashi tist!"


# Code Challenge 2 - Split the Bill

It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each. The function should return an object/dict with the same names, showing how much money the members should pay or receive. Further points:

The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group. If value is a decimal, round to two decimal places. Translations and comments (and upvotes!) welcome.

Example

3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
    A: 20, 
    B: 15, 
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}


# Code Challenge 3 - makeFriendlyDates - Date Ranges

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:


makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]
makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].


# Code Challenge 4 - Proximity

You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in the city, 
but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way for us to get data from a service. 
But now you want to build an App to help people decide what to find in the city.

You are given the following set of data as a result from an API request and you want to sort 
those results in terms of proximity to your starting location (General Assembly).

var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}
var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]

Write a function in JS to print the names of the results in order of closest to your location to furthest away.

Also, explain what your assumptions are for the way you are calculating distance between the start point and the results.


# Code Challenge 5 - The Odd Integer (Practice function pipeline)

You have an array of integers. Find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

For Example: [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], answer is 5 since it is the only number that appears an odd number of times.


# Code Challenge 6 - Texas Hold 'em Poker. (practice class)
### (Don't have time to debug static class method issues, will come back to fix it one day)
For those who want to know more about Texas Hold 'Em Poker or just need a refresher. Check Wikipedia Article on Texas Hold 'Em Poker. We will simulate the dealing part of the game.

Input:
You will be asked how many players 2 to 8. You will always be one of the players and you are facing 1 to 7 other computer controlled players.

Output:
Display the 2 cards each player is dealt and the display the 5 community cards. You decide how to display these cards (with words or symbols for the cards).

Example:
How many players (2-8) ? 3

Your hand: 2 of Clubs, 5 of Diamonds
CPU 1 Hand: Ace of Spades, Ace of Hearts
CPU 2 Hand: King of Clubs, Queen of Clubs

Flop: 2 of Hearts, 5 of Clubs, Ace of Clubs
Turn: King of Hearts
River: Jack of Hearts

Dealing Cards:
To keep things close to the game you will be dealing from 1 deck of standard playing cards. Once you deal that card you cannot deal it again. Remember to look up the terms burn, flop, turn and river online. In Texas Hold 'em you:

burn a card (draw and discard without looking at it) then flop.
burn a card, then turn.
burn a card, then river.
Remember to remove the cards from the pool of possible cards that can be dealt after burn, flop, turn and river.

# code 7 - Tresure Map

You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, 
so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) 
and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

// Sample output:

treasureFinder(map1) // should return [2, 2];

You can assume that the size of the treasure map will be the same.

### Some additional maps:
var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];

# code 8 - Permutation 



# code 9 - Filter Out the Geese

  Write a function, gooseFilter, that takes an array of strings as an 
  argument and returns a filtered array containing the same elements but with the 'geese' removed.

  The geese are any strings in the following array, which is pre-populated in your solution:


  For example, if this array were passed as an argument:
  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

  Your function would return the following array:
  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

  The elements in the returned array should be in the same order as in the initial array passed to your function, 
  albeit with the 'geese' removed.


  # code 10 - write a function only returns the common elements in nested Array 

    You are given three arrays, write a function threeWayIntersection which only returns the common elements in all three arrays. For example:

    threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9])  => [3,4]

  

  # code 11 - Concat Unique Strings

  Take 2 strings s1 and s2 each only containing letters from `a` to `z`. Return one new sorted string, the longest possible, containing distinct letters - each taken only once - from s1 and s2.

  ### Example:
  ```
  s1 = "xyaabbbccccdefww"
  s2 = "xxxxyyyyabklmopq"
  longest(s1, s2) => "abcdefklmopqwxy"
  ```

  # code 12 - Roman Numerals

  The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

  The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

  Write a function to convert from normal numbers to Roman Numerals: e.g.

  1  => I
  10  => X
  7  => VII
  There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

  Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

  To see this in practice, consider the example of 1990.

  In Roman numerals 1990 is MCMXC:

  1000=M 900=CM 90=XC

  2008 is written as MMVIII:

  2000=MM 8=VIII


  # code 13 - Winnie the Pooh's Honey Problem


    You have 100 jars of honey in a row 
    that are all initially closed. 
    You make 100 visits to the jars of honey.

    The first time around, 
    you visit every jar and toggle the lid (if the jar is closed,
    you open it; if it is open, you close it).

    The second time you only visit every 2nd jar of honey
    (jar #2, #4, #6, ...). The third time, every 3rd jar of honey 
    (jar #3, #6, #9, ...), etc,
    until you only visit the 100th jar of honey.

    Question: Write a function that shows 
    which jars of honey are open after Pooh's last pass.

    Extension
    Try it in JavaScript
    (or in Ruby if you already did it in JavaScript)

    ==========================================

    c c c c c  0

    o o o o o  1 

    o c o c o  2 

    o c c c o  3

  # code 14 - Extract and transform data (Extract from data.csv and then tranform)

  Criminal record in csv transform it and sort

    Sample output of the format we want our data for processing:

{  
   'Alica Brereton':[  
      {  
         product:'Marijuana',
         unitPrice:'9.18',
         units:'50',
         totalPrice:'459.00'
      }
   ],
   'William Kotai':[  
      {  
         product:'ecstasy',
         unitPrice:'19.12',
         units:'20',
         totalPrice:'382.40'
      }
   ],
   'Joel Forro':[  
      {  
         product:'heroin',
         unitPrice:'91.16',
         units:'5',
         totalPrice:'455.80'
      },
      {  
         product:'ecstasy',
         unitPrice:'19.12',
         units:'10',
         totalPrice:'191.20'
      }
   ],
   'David Ernest':[  
      {  
         product:'Methamphetamine',
         unitPrice:'108.78',
         units:'5',
         totalPrice:'543.90'
      },
      {  
         product:'cocaine',
         unitPrice:'80',
         units:'2',
         totalPrice:'160.00'
      }
   ],
   'Gabriella Hyde':[  
      {  
         product:'Marijuana',
         unitPrice:'9.18',
         units:'10',
         totalPrice:'91.80'
      },
      {  
         product:'Methamphetamine',
         unitPrice:'108.78',
         units:'8',
         totalPrice:'870.24'
      }
   ]
}

# code 15 - Dice

### Write a program using classes to generate a standard dice roll.


 ```
 Dice.roll
 # => 6
 ```

 **Note: the code above is calling a class method of Dice called "roll".** 
 **It is not an instance method e.g. Dice.new.roll.**
 **Google "ruby class methods" before proceeding with the problem**

 It should give you a different result each time.
 ```
 Dice.roll
 => 5
 Dice.roll
 => 2
```

 When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice
 ```
 Dice.roll(3)
  => [2,5,1]
 ```

 # code16 - Quiz Letter blocks

   You are given a collection of ABC blocks. 
   Just like the ones you had when you were a kid. 
   There are 19 blocks with two letters on each block. 
   You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:

   ```
   [
   ['B','O'],
   ['X','K'],
   ['D','Q'],        
   ['C','P'],
   ['N','A'],
   ['G','T'],
   ['R','E'],
   ['T','G'],
   ['Q','D'],
   ['F','S'],
   ['J','W'],
   ['H','U'],
   ['V','I'],
   ['A','N'],
   ['E','R'],
   ['F','S'],
   ['L','Y'],
   ['P','C'],
   ['Z','M']
   ]
   ```
   If you test these words, these results will happen:

   ```
   can_make_word("A")
   # => true
   can_make_word("BARK")
   # => true
   can_make_word("BOOK")
   # => false
   can_make_word("TREAT")
   # => true
   can_make_word("COMMON")
   # => false
   can_make_word("SQUAD")
   # => true
   can_make_word("CONFUSE")
   # => true
   can_make_word("BOUGHT")
   # => false
   ```
   Write the `can_make_word` function to output the results above.

   not require to make a class 

   using attribute true or false, rule out used block 

   # code17 - Say it in English from 0 to 99 (Practice Class)

      Write a program that will take a number from 0 to 99 
      and spell out that number in English. 
      
      For example, if the input to the program is 22, then the output should be 'twenty-two'

      e.g.

      Say.new(22).in_english
      Say.new(-1).in_english
      # say.rb:7:in 'in_english': Number must be between 0 and 99, inclusive. (ArgumentError)
      The program must also report any values that are out of range.

      Some good test cases for this program are:

      0
      14
      50
      98
      -1
      100

# code18 - Card Traders
   
   Alfred and Peter are best friends and Pokemon card traders. 
   
   Each week they get together and decide to buy a new pack of Pokemon trading cards. 
   
   Each pack has a total of 10 cards. Each card has the Pokemon's name and attack power.

   Alfred and Peter have not opened the pack yet, but it contains the following cards:

   |Name|Attack|
   |----|------|
   |Pikachu|40|
   |Rattata|20|
   |Pidgeot|60|
   |Alakazam|80|
   |Butterfree|30|
   |Gengar|70|
   |Moltres|100|
   |Vulpix|40|
   |Blastoise|80|
   |Hitmonchan|50|

   1) Put the above cards into an appropriate data structure (so that you can easily remove or change the order of cards if you needed to)

   2) They are about to open the pack of cards, and they have a ritual for deciding who gets to keep each card in the pack.

   Do each of the following with your data structure:

   2a) Firstly, keeping the cards faced down (so they cannot see), they reverse the order of the cards.
   
   2b) They then split the cards into groups of 3, so they end up with 4 piles of cards (the first three with 3, and the last pile with just 1)

   2c) Alfred takes the first and third piles of cards, and Peter takes the second and fourth piles. Create a new data structure for Alfred and Peter and pass them the cards.

# code19 -  Series Sum

   Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:
 You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00
 You will only be given Natural Numbers as arguments.

## Examples:

seriesSum(1) => 1 = "1.00"
seriesSum(2) => 1 + 1/4 = "1.25"
seriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

sprintf ('%.2f', 1)

Ruby -> every things is method 
even operator
1+1  ->   (1).+

# code20 - from leetcode (Need to take some time to understand)

Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

# code21 - from leetcode - database - Second Highest Salary

   Write a SQL query to get the second highest salary from the Employee table.

   +----+--------+
   | Id | Salary |
   +----+--------+
   | 1  | 100    |
   | 2  | 200    |
   | 3  | 300    |
   +----+--------+
   For example, given the above Employee table, the query should return 200 as the second highest salary. If there is no second highest salary, then the query should return null.

   +---------------------+
   | SecondHighestSalary |
   +---------------------+
   | 200                 |
   +---------------------+

   schema

   CREATE TABLE Employee (
    user_id serial PRIMARY KEY,
    Salary varchar(255));


    INSERT INTO Employee (salary) VALUES (100);
    INSERT INTO Employee (salary) VALUES (200);
    INSERT INTO Employee (salary) VALUES (300);


# code22 - from leetcode - database - Second Highest Salary

The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.

+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+

Given the Employee table, write a SQL query that finds out employees who earn more than their managers. 
For the above table, Joe is the only employee who earns more than his manager.

+----------+
| Employee |
+----------+
| Joe      |
+----------+

# code23 - from leetcode - database - Customers Who Never Order

Suppose that a website contains two tables, the Customers table and the Orders table.
 Write a SQL query to find all customers who never order anything.

Table: Customers.

+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Table: Orders.

+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Using the above tables as example, return the following:

+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+


# code24 - from leetcode - database - Duplicate Emails

Write a SQL query to find all duplicate emails in a table named Person.

+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:

+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Note: All emails are in lowercase.


# code25 - from leetcode - database - Rising Temperature

Given a Weather table, write a SQL query to find all dates' Ids with higher temperature compared to its previous (yesterday's) dates.

+---------+------------------+------------------+
| Id(INT) | RecordDate(DATE) | Temperature(INT) |
+---------+------------------+------------------+
|       1 |       2015-01-01 |               10 |
|       2 |       2015-01-02 |               25 |
|       3 |       2015-01-03 |               20 |
|       4 |       2015-01-04 |               30 |
+---------+------------------+------------------+
For example, return the following Ids for the above Weather table:

+----+
| Id |
+----+
|  2 |
|  4 |
+----+

# code26 - from leetcode - database - Delete Duplicate Emails

Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Id is the primary key column for this table.
For example, after running your query, the above Person table should have the following rows:

+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+

# code27 - from leetcode - database - Combine Two Tables

Table: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId is the primary key column for this table.
Table: Address

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId is the primary key column for this table.
 

Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:

FirstName, LastName, City, State

# code28 - from leetcode - database - Write a SQL query to get the nth highest salary from the Employee table.

Write a SQL query to get the nth highest salary from the Employee table.

+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
For example, given the above Employee table, the nth highest salary where n = 2 is 200. If there is no nth highest salary, then the query should return null.

+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+


# code29 - ZigZag Conversion


   The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

   P   A   H   N
   A P L S I I G
   Y   I   R
   And then read line by line: "PAHNAPLSIIGYIR"

   Write the code that will take a string and make this conversion given a number of rows:

   string convert(string s, int numRows);
   Example 1:

   Input: s = "PAYPALISHIRING", numRows = 3
   Output: "PAHNAPLSIIGYIR"
   Example 2:

   Input: s = "PAYPALISHIRING", numRows = 4
   Output: "PINALSIGYAHRPI"
   Explanation:

   P     I    N
   A   L S  I G
   Y A   H R
   P     I

# code30 - Access to exam Result Object

   Access to exam Result Object and transfer the data to other form
   
   e.g. average score of one student


# code31 - transforming an array and return 2 warning message accordingly

   if the position is  'sheep', 'wolf', 'sheep' 
      then message "Oi! Sheep number 1! You are about to be eaten by a wolf!"


   if the position is  'sheep', 'sheep', 'wolf' 
      then return "Pls go away and stop eating my sheep"

      all others return nothing