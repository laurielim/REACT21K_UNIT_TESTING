# **hasTopics(id)**

## Test 1: Returns true if the book has topics, otherwise returns false for default json

Test data:

```json
[
  // value, expectedReturn
  [1, true],
  [2, true],
  [3, false]
]
```

## Test 2: Returns false if parameter is missing

```js
bookStorage.hasTopics();
```

Returns:

```json
false
```
