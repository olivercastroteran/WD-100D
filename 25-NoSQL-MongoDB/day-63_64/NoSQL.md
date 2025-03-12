# MongoDB NoSQL Cheatsheet (macOS/M2 Focus)

This cheatsheet covers the essential commands for working with MongoDB via the shell (`mongosh`), optimized for developers transitioning from SQL.

---

## 1. Database & Collection Basics

| Command                | Description                                                     |
| :--------------------- | :-------------------------------------------------------------- |
| `show dbs`             | List all available databases.                                   |
| `use my_database`      | Switch to a specific database (creates it if it doesn't exist). |
| `db`                   | Show the current database you are using.                        |
| `show collections`     | List all collections in the current database.                   |
| `db.dropDatabase()`    | Delete the current database.                                    |
| `db.collection.drop()` | Delete a specific collection.                                   |

---

## 2. CRUD Operations (Create, Read, Update, Delete)

### Create (Insert)

- **Insert One:**
  ```javascript
  db.posts.insertOne({
    title: 'My First Post',
    body: 'Hello World',
    author_id: 1,
  });
  ```
