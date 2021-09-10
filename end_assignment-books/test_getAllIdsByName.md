# **getAllIdsByName(value)**

## Test 1: Get array of id where value match book name

Test values:

```json
[
  // value, expectedResult
  ["SQL", [1]],
  ["databases", [2, 3]],
  ["hacking", [3]]
]
```

## Test 2: Return null if there is no match

```js
bookStorage.getAllIdsByName("javascript");
```

returns:

```json
null
```

## Test 3: Return null if parameter is missing

```js
bookStorage.getAllIdsByName();
```

returns:

```json
null
```
