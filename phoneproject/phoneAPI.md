# Phone API

This project tests getting and posting data.

## Data

Data will be in a json file

### phones.json

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

## Class PhoneRegister

### Constructor(data)

Phones.json array is passed as a parameter `data`. If the parameter is missing thwos an exception `'Phone data missing'`;

### getTypes()

Returns all phone types in an array. The type is added to the result array only once. If there are no phones, an empty array [] is returned.

For example:

```json
["home", "work", "mobile]
```

### getNumbersByType(firstname, lastname, type)

Method returns an array of phone numbers of the given `type` belonging to a given person with given `firstname`and `lastname`.

If no person with given name is found, an empty array [] is returned. If at least one parameter is missing an exception `'missing parameter'` is thrown.

For example: Matt River and mobile

```json
[78788877, 2348654]
```

## getAllNumbersByType(type)

Returns an array of names and numbers of given type. If no number of given type is found, returns an empty array [].

If a person has multiple numbers of the same type, each of them will be in it's own object. If a parameter is missing, the function throws an exception `'missing parameter'`.

The format of the returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": 123 } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": 123 } }
]
```

```json
[
  {
    "firstname": "John",
    "lastname": "Doe",
    "number": { "type": "home", "tel": 12345678 }
  },
  {
    "firstname": "John",
    "lastname": "Doe",
    "number": { "type": "work", "tel": 11122233 }
  }
]
```

## getAllNumbers()

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone-field is an empty array), then the person is not added into the result array. If all phones are missing, an empty array is returned.

## getName(number)

The method searches the given phone number from the telephone registry. If the number is found, the method returns a json object of form:

```json
{ "firstname": "", "lastname": "" }
```

If number is not found or no number is provided, the method returns `'null'`
