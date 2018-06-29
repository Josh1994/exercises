/*
*  Author:      Josh M
*  Source : https://leetcode.com/problems/combine-two-tables/
*/

# Write your MySQL query statement below
SELECT Person.FirstName, Person.LastName, Address.City, Address.State
FROM Person
LEFT JOIN Address ON Person.PersonId = Address.PersonId;
