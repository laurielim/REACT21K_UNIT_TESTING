# **getById(id)**

## Test 1: Returns book object with matching id

```js
bookStorage.getById(1);
```

returns

```json
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
```

## Test 2: Returns null when no id match

```js
bookStorage.getById(100);
```

returns

```json
null
```

## Test 3: Throws exception if parameter is missing

```js
bookStorage.getById();
```

Test exception `'missing parameter'`
