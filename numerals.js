'use strict';

const numberWords = new Map([
  [1000000000000000, 'Quadrillion'],
  [1000000000000, 'Trillion'],
  [1000000000, 'Billion'],
  [1000000, 'Million'],
  [1000, 'Thousand'],
  [100, 'Hundred'],
  [90, 'Ninety'],
  [80, 'Eighty'],
  [70, 'Seventy'],
  [60, 'Sixty'],
  [50, 'Fifty'],
  [40, 'Forty'],
  [30, 'Thirty'],
  [20, 'Twenty'],
  [19, 'Nineteen'],
  [18, 'Eighteen'],
  [17, 'Seventeen'],
  [16, 'Sixteen'],
  [15, 'Fifteen'],
  [14, 'Fourteen'],
  [13, 'Thirteen'],
  [12, 'Twelve'],
  [11, 'Eleven'],
  [10, 'Ten'],
  [9, 'Nine'],
  [8, 'Eight'],
  [7, 'Seven'],
  [6, 'Six'],
  [5, 'Five'],
  [4, 'Four'],
  [3, 'Three'],
  [2, 'Two'],
  [1, 'One'],
  [0, 'Zero'],
]);

/*
 * Given any integer, print an English phrase that describes the integer
 * e.g., 300,000,234 -> "Three Hundred Million Two Hundred Thirty Four"
 *
 * If a number is one or two digits, translate it using a lookup table.
 * For longer numbers, break down the number into its leading digit, magnitude,
 * and remainder, and recursively translate those into English words.
 *
 * I only made this work in the quadrillions range because
 * Number.MAX_SAFE_INTEGER = 9,007,199,254,740,991
 */
function numeral(n) {
  if (! Number.isInteger(n)) {
    throw new Error(`${n} is not an integer`);
  }

  if (n < 0) {
    return `Negative ${numeral(Math.abs(n))}`;
  }

  else if (n < 100) {
    if (numberWords.has(n)) {return numberWords.get(n);}
    // for numbers not directly in the numberWords map,
    // break down into its 'tens' word and remainder
    // e.g., 42 has tens word 'Forty' and remainder 2
    let tens = Math.floor(n / 10) * 10;
    let tensWord = numberWords.get(tens);
    let remainder = n % 10;

    return tensWord + (remainder !== 0 ? ` ${numeral(remainder)}` : ``);
  }

  else {
    let magnitude = getMagnitude(n);
    // find the leading digits relative to the number's magnitude
    // then recursively build the remainder phrase
    // e.g., 918 has leading digit 9, magnitude 'Hundred', and remainder 18
    let leadingDigit = Math.floor(n / magnitude.value);
    let label = magnitude.label;
    let remainder = n % magnitude.value;

    return `${numeral(leadingDigit)} ${label}`
      + (remainder !== 0 ? ` ${numeral(remainder)}` : ``);
  }
}

/*
 * Find which label to use for large numbers, like 'Million' or 'Trillion'.
 * Returns an object containing the magnitude value and label.
 */
function getMagnitude(n) {
  // maps iterate their elements by insertion order, so starting at the top,
  // as soon as n is greater than equal to an element, that's the magnitude
  for (let number of numberWords.keys()) {
    if (n >= number) {
      return {
        value: number,
        label: numberWords.get(number),
      };
    }
  }
}

module.exports = numeral;
