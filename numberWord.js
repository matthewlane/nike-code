'use strict';
const TEN = 10;
const TWENTY = 20;
const HUNDRED = 100;
const THOUSAND = 1000;
const MILLION = 1000000;
const BILLION = 1000000000;
const TRILLION = 1000000000000;
const QUADRILLION = 1000000000000000;
const QUINTILLION = 1000000000000000000;

/*
 * Given any integer, print an English phrase that describes the integer
 * e.g., 300,000,234 -> "Three Hundred Million Two Hundred Thirty Four"
 *
 * If a number is one or two digits, translate it using a lookup table.
 * For longer numbers, break down the number into its place digit and remainder
 * and recursivley translate those numbers into English words.
 *
 * I only made this work in the quadrillions range because
 * Number.MAX_SAFE_INTEGER = 9,007,199,254,740,991
 */
function numberWord(n) {
  if (! Number.isInteger(n)) {
    throw new Error(n + ' Not Integer');
  }

  if (n >= 0 && n < TEN) {
    return onesPlace(n);
  }

  else if (n >= TEN && n < TWENTY) {
    return teensPlace(n);
  }

  else if (n >= TWENTY && n < HUNDRED) {
    let placeDigit = Math.floor(n / TEN) * TEN;
    return tensPlace(placeDigit) + remainder(n % TEN);
  }

  else if (n >= HUNDRED && n < THOUSAND) {
    let placeDigit = Math.floor(n / HUNDRED);
    return numberWord(placeDigit) + ' Hundred' + remainder(n % HUNDRED);
  }

  else if (n >= THOUSAND && n < MILLION) {
    let placeDigit = Math.floor(n / THOUSAND);
    return numberWord(placeDigit) + ' Thousand' + remainder(n % THOUSAND);
  }

  else if (n >= MILLION && n < BILLION) {
    let placeDigit = Math.floor(n / MILLION);
    return numberWord(placeDigit) + ' Million' + remainder(n % MILLION);
  }

  else if (n >= BILLION && n < TRILLION) {
    let placeDigit = Math.floor(n / BILLION);
    return numberWord(placeDigit) + ' Billion' + remainder(n % BILLION);
  }

  else if (n >= TRILLION && n < QUADRILLION) {
    let placeDigit = Math.floor(n / TRILLION);
    return numberWord(placeDigit) + ' Trillion' + remainder(n % TRILLION);
  }

  else if (n >= QUADRILLION && n < QUINTILLION) {
    let placeDigit = Math.floor(n / QUADRILLION);
    return numberWord(placeDigit) + ' Quadrillion' + remainder(n % QUADRILLION);
  }

  else if (n < 0) {
    return 'Negative ' + numberWord(Math.abs(n));
  }

  else {
    return;
  }
}

/*
 * Translate single-digit integer to English numeral.
 */
function onesPlace(n) {
  if (! ((n >= 0) && (n < TEN))) {
    throw new Error(n + ' not in ones place');
  }

  const numeralTable = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
  };

  return numeralTable[n];
}

/*
 * Translate teens-place integer to English numeral. Numbers in this range
 * follow unique naming rules hence their own function.
 */
function teensPlace(n) {
  if (! ((n >= TEN) && (n < TWENTY))) {
    throw new Error(n + ' not in teens place');
  }

  const numeralTable = {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eightteen',
    19: 'Nineteen'
  };

  return numeralTable[n];
}

/*
 * Translate tens-place integer to English numeral.
 */
function tensPlace(n) {
  if (! ((n >= TWENTY) && (n < HUNDRED))) {
    throw new Error(n + ' not in tens place');
  }

  const numeralTable = {
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety'
  };

  return numeralTable[n];
}

/*
 * Helper function to return remainder word if there is one
 */
function remainder(n) {
  if (n !== 0) {
    return ' ' + numberWord(n);
  } else {
    return '';
  }
}


module.exports = numberWord;
/*
NOTE TO REVIEWERS
I used the line above so I could test this with Mocha.
To test manually you can replace that line with something like the following:
console.log(numberWord(300000234));
*/
