/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

/**
 * @param {number} numbers
 * @returns {number}
 */
export function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}