# Phone API

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

For example: Matt River and Work

```json
[78788877]
```
