# MongoDB NoSQL Cheatsheet

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
- **Inser Many:**
  ```javascript
  db.posts.insertMany([
    { title: 'Post 2', body: 'Content', tags: ['tech'] },
    { title: 'Post 3', body: 'More content', tags: ['dev'] },
  ]);
  ```
- **Find All:**
  ```javascript
  db.posts.find();
  db.posts.find().pretty(); // Formats JSON for readability
  ```
- **Find with filter:**
  ```javascript
  db.posts.find({ title: 'My First Post' });
  ```
- **Find One:**
  ```javascript
  db.posts.findOne({ _id: ObjectId('60d5ec9f...') });
  ```

### Update

- **Update One ($set):**

  ```javascript
  db.posts.updateOne({ title: 'Post 2' }, { $set: { title: 'Updated Title' } });
  ```

- **Increment Value ($inc):**

  ```javascript
  db.users.updateOne({ name: 'Oliver' }, { $inc: { age: 1 } });
  ```

- **Push to Array ($push):**
  ```javascript
  db.posts.updateOne({ _id: 1 }, { $push: { tags: 'coding' } });
  ```

### Delete

- **Update One ($set):**

  ```javascript
  db.posts.updateOne({ title: 'Post 2' }, { $set: { title: 'Updated Title' } });
  ```

- **Delete Many:**
  ```javascript
  db.posts.deleteMany({ status: 'inactive' });
  ```

## 3. Query Operators

### Comparison

- $gt (Greater Than)

- $gte (Greater Than or Equal)

- $lt (Less Than)

- $lte (Less Than or Equal)

- $ne (Not Equal)

- $in (Matches any value in an array)

  ```
  db.posts.find({ views: { $gt: 100 } })
  ```

### Logical

- $or: Matches any of the conditions.

- $and: Matches all conditions.

## 4. Sorting, Limiting & Projection

- Limit Results: db.posts.find().limit(5)

- Skip Results: db.posts.find().skip(5)

- Sort: 1 for Ascending, -1 for Descending.
  ```
  db.posts.find().sort({ date: -1 })
  ```
- Projection (Select Specific Fields):
  ```
  // 1 = include, 0 = exclude
  db.posts.find({}, { title: 1, body: 1, _id: 0 })
  ```

---

## 5. SQL vs. NoSQL Terminology

| SQL (MySQL)     | NoSQL (MongoDB)     |
| :-------------- | :------------------ |
| **Table**       | Collection          |
| **Row**         | Document            |
| **Column**      | Field               |
| **Primary Key** | \_id (ObjectID)     |
| **Join**        | Embedding / $lookup |
| **Foreign Key** | Reference           |

---

## 6. Pro-Tips for macOS (M2)

- **Starting the Shell:** Use `mongosh` in a new terminal tab while your `mongod` process is running in the background.
- **Exiting the Shell:** Type `exit` or `quit()` to return to your normal Mac terminal.
- **Log Management:** Use the `--logappend` flag in your startup command to keep all logs in one file instead of creating a new timestamped file every time you start the server.
- **Performance:** Since you are on an M2 Mac, MongoDB runs extremely efficiently, but keeping your data and logs within your `Documents` or `Development` folders (as you have done) helps avoid macOS "System Integrity Protection" permission issues.
