/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */

const numbers = [1, 2, 3, -4, 6]

const largestPairSum = (numbers) => {
    let i,
    j,
    indexOfFirstMaxNum = 0,
    firstMaxNum = numbers[0],
    secondMaxNum = numbers[0],
    arrSize = numbers.length;

    for (i = 1; i < arrSize; i += 1) {
        if (firstMaxNum < numbers[i]) {
            firstMaxNum = numbers[i];
            indexOfFirstMaxNum = i;
        }
    }
    numbers[indexOfFirstMaxNum] = null;
    for (j = 1; j < arrSize; j += 1) {
        if (secondMaxNum < numbers[j]) {
            secondMaxNum = numbers[j];
        }
    }
    return firstMaxNum + secondMaxNum;
}
console.log(largestPairSum(numbers));