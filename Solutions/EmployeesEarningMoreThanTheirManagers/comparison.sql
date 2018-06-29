/*
*  Author:      Josh M
*/

# Write your MySQL query statement below
SELECT a.Name as Employee
FROM Employee as a, Employee as B
WHERE a.ManagerId = b.Id AND a.Salary > b.Salary