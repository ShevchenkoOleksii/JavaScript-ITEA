/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
const str = 'MjtkuBovqrU';

const repeatString = (str) => {
    let newArr = str.split(''),
    i,
    j,
    arrSize = newArr.length,
    resultArr = [];

    for (i = 0; i < arrSize; i += 1) {
        resultArr.push(newArr[i].toUpperCase());
        for (j = 0; j < i; j += 1) {
            resultArr[i] += newArr[i].toLowerCase();
        }
    }
    return resultArr.join('-');

}
console.log(repeatString(str)); // 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'