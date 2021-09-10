# **getTotalPrice(id)**

## Test 1: Returns the total price of the book including the total price of the extras

Test data:

```json
[
  // value, expectedReturn
  [1, 70],
  [2, 190],
  [3, 30]
]
```

## Test 2: Throws exception if no book with matching id found

```js
bookStorage.getTotalPrice(5);
```

Test exception `'nothing found with given id'`
