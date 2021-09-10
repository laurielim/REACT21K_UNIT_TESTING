# Test Cases

## constructor(data)

Phones json array is passed as a parameter `data`. If the parameter is missing, throws an `'phone data missing'`;

### Test 1: object created

```js
new PhoneRegister(jsonData);
```

Test if the objects inner field has the same value as given as parameter. Parameter jsonData is the json array from the default `phones.json`

### Test 2: missing parameter throws an exception

```js
new PhoneRegister();
```

Test exception `'phone data missing'`

## getTypes()

### Test 1: default json

Get types of the default jsonData

Test data:

```json
[
  {
    "firstname": "John",
    "lastname": "Doe",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Leila",
    "lastname": "River",
    "phones": []
  }
]
```

Returns

```json
["home", "work", "mobile"]
```

### Test 2: persons heve no phones

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

returns an empty array []

### Test 3: no persons in PhoneRegister

test data is []

returns an empty array []

## getNumbersByType(firstname, lastname, type)

### Test 1: get from default jsonData with parameters Matt, River, mobile

```js
phoneRegister.getNumbersByType("Matt", "River", "mobile");
```

Returns:

```json
[78788877, 2348654]
```

## Test 2: get from default jsonData with parameters John, Doe, mobile

```js
phoneRegister.getNumbersByType("John", "Doe", "mobile");
```

returns

```json
[98765432]
```

## Test 3: get from default jsonData with parameters Matt, River, work

```js
phoneRegister.getNumbersByType("Matt", "River", "work");
```

returns

```json
[]
```

## getAllNumbersByType(type)

### Test 1: get all work numbers

```js
phoneRegister.getAllNumbersByType("work");
```

returns:

```json
[
  {
    "firstname": "John",
    "lastname": "Doe",
    "number": { "type": "work", "tel": 11122233 }
  },
  {
    "firstname": "Leila",
    "lastname": "River",
    "number": { "type": "work", "tel": 7425775 }
  }
]
```

### Test 2: get all mobile numbers

```js
phoneRegister.getAllNumbersByType("mobile");
```

returns:

```json
[
  {
    "firstname": "John",
    "lastname": "Doe",
    "number": { "type": "mobile", "tel": 98765432 }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": 78788877 }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": 2348654 }
  },
  {
    "firstname": "Leila",
    "lastname": "River",
    "number": { "type": "work", "tel": 2223453 }
  }
]
```

### Test 3: type 'x' will return an empty array []'

```js
phoneRegister.getAllNumbersByType("x");
```

returns [].

### Test 4: missing parameter throws an exception

```js
phoneRegister.getAllNumbersByType();
```

throws an exception 'missing parameter'

## getAllNumbers()

### Test 1: get all with default data

```js
phoneRegister.getAllNumbers();
```

result is:

```json
[
  {
    "firstname": "John",
    "lastname": "Doe",
    "phones": [
      { "type": "home", "number": 12345678 },
      { "type": "work", "number": 11122233 },
      { "type": "mobile", "number": 98765432 }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": 56873422 },
      { "type": "work", "number": 78788877 },
      { "type": "mobile", "number": 2348654 }
    ]
  },
  {
    "firstname": "Leila",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": 25634544 },
      { "type": "work", "number": 7425775 },
      { "type": "mobile", "number": 2223453 }
    ]
  }
]
```

## getName(number)

### Test 1: get name of the number `12345678`

Call

```js
phoneRegister.getName(12345678);
```

Returns

```json
{ "firstname": "John", "lastname": "Doe" }
```

### Test 2: getName by numbers from default data

### Test 3: wrong number

Call

```js
phoneRegister.getName(0000);
```

returns `null`
