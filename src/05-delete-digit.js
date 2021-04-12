/** DONE!!!
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let result = 0;
  const numbers = [];
  let number = num;

  while (number) {
    numbers.push(number % 10);
    number = Math.floor(number / 10);
  }
  for (let index = 0; index < numbers.length; index++) {
    let n = 0;
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (i !== index) {
        n = n * 10 + numbers[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}
module.exports = deleteDigit;
