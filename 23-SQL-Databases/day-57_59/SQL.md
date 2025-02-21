# 🗄️ SQL Engineering Cheat Sheet

A comprehensive guide to standard SQL syntax for Database Engineers. Use this as a quick reference for DDL, DML, and optimization.

---

## 1. Data Definition Language (DDL)

_Defines the structure of the database and its tables._

| Command      | Action           | Syntax                                             |
| :----------- | :--------------- | :------------------------------------------------- |
| **CREATE**   | New table/DB     | `CREATE TABLE table_name (col1 type, col2 type);`  |
| **ALTER**    | Modify structure | `ALTER TABLE table_name ADD COLUMN col_name type;` |
| **DROP**     | Delete object    | `DROP TABLE table_name;`                           |
| **TRUNCATE** | Empty table      | `TRUNCATE TABLE table_name;`                       |

---

## 2. Data Manipulation Language (DML)

_Handles the data records within the tables._

### CRUD Operations

```sql
-- Create (Insert)
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

-- Read (Select)
SELECT * FROM users WHERE status = 'active';

-- Update
UPDATE users SET status = 'inactive' WHERE id = 101;

-- Delete
DELETE FROM users WHERE id = 101;
```

## 2. Data Query Language (DQL)

### Joins (Combining Data)

INNER JOIN: Returns records that have matching values in both tables.

LEFT JOIN: Returns all records from the left table, and the matched records from the right table.

RIGHT JOIN: Returns all records from the right table, and the matched records from the left table.

FULL JOIN: Returns all records when there is a match in either left or right table.

```sql
SELECT orders.id, customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```

### Filtering & Aggregation

GROUP BY: Groups rows that have the same values into summary rows.

HAVING: Like WHERE, but for aggregate functions (e.g., COUNT, AVG).

LIKE: Pattern matching (% for multiple characters, \_ for a single character).

```sql
SELECT department, COUNT(*), AVG(salary)
FROM employees
WHERE hire_date > '2020-01-01'
GROUP BY department
HAVING COUNT(*) > 5
ORDER BY AVG(salary) DESC;
```

## 4. Optimization & Constraints

Essential for performance and data integrity.

### Common Constraints

PRIMARY KEY: Uniquely identifies each record in a table.

FOREIGN KEY: A field that links to the primary key in another table.

NOT NULL: Ensures that a column cannot have a NULL value.

UNIQUE: Ensures that all values in a column are different.

### Indexing

Improves query speed but adds overhead to write operations.

```sql
-- Create a standard index
CREATE INDEX idx_user_email ON users(email);

-- Performance check (Execution Plan)
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@test.com';
```

## 5. Transactions (TCL)

Ensures data consistency using ACID (Atomicity, Consistency, Isolation, Durability) principles.

```sql
BEGIN; -- Start transaction (or START TRANSACTION depending on SQL dialect)

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

-- Save changes permanently to the database
COMMIT;

-- Or undo changes if an error occurs during the process
ROLLBACK;
```

## 6. Useful Functions & Logic

Functions for data cleanup, conditional results, and windowing.

COALESCE(val, default): Returns the first non-null value in a list.

CASE: Logical "If/Then" statements inside SQL queries to create conditional columns.

ROW_NUMBER(): A window function that assigns a unique sequential integer to rows.

```sql
SELECT name,
       CASE
            WHEN salary > 100000 THEN 'Senior'
            WHEN salary BETWEEN 60000 AND 100000 THEN 'Mid'
            ELSE 'Junior'
       END AS professional_level
FROM employees;
```
