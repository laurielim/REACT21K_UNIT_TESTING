# **getAllBooksByAuthor(author)**

## Test 1: Returns an array of book object

```js
bookStorage.getAllBooksByAuthor("Layla Jones");
```

returns

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [
      {
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  }
]
```

## Test 2: Returns an empty array if not book found

```js
bookStorage.getAllBooksByAuthor("JK Rowling");
```

returns

```json
[]
```

## Test 3: Throws exception for missing parameter

```js
bookStorage.getAllBooksByAuthor();
```

Test exception `'missing parameter'`
