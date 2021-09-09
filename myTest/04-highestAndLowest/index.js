/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
const numbers = '1 2 3 -4 6';

 
const highestAndLowest = (numbers) => {
    let someArr = numbers.split(' '),
    i,
    maxNum = someArr[0],
    minNum = someArr[0],
    arrSize = someArr.length;

    for (i = 1; i < arrSize; i += 1) {
        if (maxNum < someArr[i]) {
            maxNum = someArr[i];
        }
        if (minNum > someArr[i]) {
            minNum = someArr[i];
        }
    }
    return [minNum, maxNum].join(' ');
}
console.log(highestAndLowest(numbers));