/** DONE
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  const array = Array.from(String(num), Number);
  let result = 0;
  if (array.length !== 1) {
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return getSumOfDigits(result);
  } if (array.length === 1) {
    result = array.join('');
  }
  return +result;
}
module.exports = getSumOfDigits;
