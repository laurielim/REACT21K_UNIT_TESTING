# **getPriceOfTheExtras(id)**

## Test 1: Returns the total price of extras. If no extras is found returns 0

Test data:

```json
[
  // value, expectedReturn
  [1, 45],
  [2, 145],
  [3, 0]
]
```

## Test 2: Throws exception if no book with matching id found

```js
bookStorage.getPriceOfTheExtras(5);
```

Test exception `'nothing found with given id'`
