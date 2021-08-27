# Dice class (API)

This is a Dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound. The maximum upper bound is 20. If the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled, the dot count can't become 0 again.

## Operations

### Constructor

- initializes the dice with upper bound that is passed as a parameter
- if no upper bound is given, the default upper bound is 6
- initializes dot count to 0
- if upper bound is not an integer, throw an exception `'upper bound must be an integer'`
- if the upper bound is not betweem 1 and 20, an exception is thrown:
  - upper bound > 20: `'upper bound is too big'`
  - upper bound < 1: `'upper bound is too small'`

#### Test cases for constructor

1. Create a dice with no upper bound given

   - Create a dice with dot count between 1 and 6
   - Dot count is zero

1. Create a dice with given upper bound 2-20

   - Create a dice with dot count between 1 and upper bound
   - Dot count is zero (tested in test case 1)

1. Test the exceptions
   - 0 throws an exception `'Upper bound too small'`
   - 1 throws an exception `'Upper bound too small'`
   - -1 throws an exception `'Upper bound too small'`
   - 21 throws an exception `'Upper bound too big'`
   - 'a' throws an exception `'Upper bound must be an integer'`
   - 2.5 throws an exception `'Upper bound must be an integer'`

### methods

#### roll

Rolls the dice and set the dot count to a random number between 1 and the upper bound (included). Returns nothing.

##### Test cases for roll

1. Create a dice with no upper bound. Upper bound should be 6. Test when the dice hasn´t been rolled, dot count is 0. Then roll the dice and now dot count should be between 1 and 6.

1. Create a dice with upper bound 20 => after rolled results dot count between 1 and 20.

#### toString

Returns the dot count as a string. For example: `'3'`. If the dice has not been rolled and dot count is 0, returns a text: `'Not rolled yet'`

##### Test cases for toString

In both cases create a new dice (no upper bound).

- Roll the dice and compare result string with dots
- Don't roll the dice. Compare results to `'Not rolled yet'`

### Getter

#### dots

Returns the number of dots

#### minimumValue

Returns the lower bound of a dice, which should be 1.

#### maximumValue

Returns the upper bound of a dice
