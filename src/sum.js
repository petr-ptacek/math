import { sum as _sum } from "lodash-es";

/**
 * @param {number} numbers
 * @returns {number}
 */
export function sum(...numbers) {
    // return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return _sum(numbers);
}