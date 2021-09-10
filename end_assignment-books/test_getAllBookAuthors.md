# **getAllBookAuthors()**

## Test 1: Returns array of author names from default jsonData

```js
bookStorage.getAllBookAuthors();
```

returns

```json
["Layla Jones", "Antony Lee", "Emily White"]
```

## Test 2: Returns an empty array if no authors found

Test data:

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "",
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

Returns

```json
[]
```

## Test 3: Author is added to the result array only once

Test data:

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Antony Lee",
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
  },
  {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Antony Lee",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [
      {
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  }
]
```

Returns

```json
["Antony Lee"]
```

## Test 4: No book in BookStorage

Test data is []

Returns an empty array []
