# **getBookTopics(id)**

## Test 1: Returns array of book topics if topics found, otherwise returns an empty array

Test data:

```json
[
  // value, expectedReturn
  [1, ["noSql", "sql", "future databases"]],
  [2, ["data storages", "sql", "noSql"]],
  [3, []]
]
```

## Test 2: Returns empty array if parameter is missing

```js
bookStorage.getBookTopics();
```

returns

```json
[]
```

## Test 3: Returns empty array if id does not match

```js
bookStorage.getBookTopics(1000);
```

returns

```json
[]
```
