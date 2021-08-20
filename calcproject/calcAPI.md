# calc library API

## sum(a,b)

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum on given numbers.

- If parameter is missing, throws an exception: `'parameter missing'`
- If parameters are not numbers, throws an exception: `'only numbers allowed'`

### Test cases

Note that test case descriptions are usually in their own file but for the sake of simplicity, we're keeping everything in one file.

#### Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(-2,-4) return -6
- sum(-2,4) return 2

Note: alternatively, mark as follows to allow for simple copy pasting

[2, -4, -2],
[0, 0, 0],
[0, 3, 3,],
[3, 0, 3,],
[0, -3, -3],
[-3, 0, -3]

#### Floats

[3, -2.5, 0],
[-3, 2.5, -0.5],
[-2.5, -3, -5.5],
[-2.5, -2.5, -5.0],
[2.5, -2.5, 0],
[2.4, -2.5, -0.1]

#### Missing parameter

- sum() throws and exception "parameter missing"
- sum(1) throws and exception "parameter missing"
- sum('a') throws and exception "parameter missing"
- sum('') throws and exception "parameter missing"

#### Parameters are not numbers

- sum('a', 1) throws and exception "only numbers allowed"
- sum(1, 'a') throws and exception "only numbers allowed"
- sum('a', 'b') throws and exception "only numbers allowed"
- sum('', '') throws and exception "only numbers allowed"
- sum(null, 1) throws and exception "parameter missing"
- sum(undefined, 1) throws and exception "parameter missing"

## subtract(a,b)

Function returns the difference of two numbers. Numbers are passed to the function as parameters.

Returns the difference on given numbers.

- If parameter is missing, throws an exception: `'parameter missing'`
- If parameters are not numbers, throws an exception: `'only numbers allowed'`

### Test cases

#### Integers

- subtract(1,1) return 0
- subtract(2,3) return -1
- subtract(-2,-4) return 2
- subtract(-2,4) return -6

Note: alternatively, mark as follows to allow for simple copy pasting

[2, -4, -2],
[0, 0, 0],
[0, 3, -3],
[3, 0, 3,],
[0, -3, 3],
[-3, 0, -3]

#### Floats

[3, -2.5, 5.5],
[-3, 2.5, -5.5],
[-2.5, -3, 0.5],
[-2.5, -2.5, 0],
[2.5, -2.5, 5.0],
[2.4, 2.5, -0.1]

#### Missing parameter

- subtract() throws and exception "parameter missing"
- subtract(1) throws and exception "parameter missing"
- subtract('a') throws and exception "parameter missing"
- subtract('') throws and exception "parameter missing"

#### Parameters are not numbers

- subtract('a', 1) throws and exception "only numbers allowed"
- subtract(1, 'a') throws and exception "only numbers allowed"
- subtract('a', 'b') throws and exception "only numbers allowed"
- subtract('', '') throws and exception "only numbers allowed"
- subtract(null, 1) throws and exception "parameter missing"
- subtract(undefined, 1) throws and exception "parameter missing"

## division

function divide(a,b) return a/b

problems:

0/0 => NaN
2/0 => Infinity
-2/0 => -Infinity
Infinity/Infinity => NaN
-Infinity/Infinity => NaN
Infinity/-Infinity => NaN
-Infinity/-Infinity => NaN

### Test cases

[0, 0, Number.NaN],
[2, 0, Number.POSITIVE_INFINITY],
[-2, 0, Number.NEGATIVE_INFINITY],
[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
