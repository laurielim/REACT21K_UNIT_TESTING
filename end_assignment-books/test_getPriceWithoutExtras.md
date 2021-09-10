# **getPriceWithoutExtras(id)**

## Test 1: Returns price of book without extras

Test data:

```json
[
  // value, expectedReturn
  [1, 25],
  [2, 45],
  [3, 30]
]
```

## Test 2: Throws exception if no book with matching id found

```js
bookStorage.getPriceWithoutExtras(5);
```

Test exception `'nothing found with given id'`
