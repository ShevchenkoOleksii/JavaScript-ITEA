/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
function trimSymbols(string, size) {
    let acc = string[0],
    i,
    newArr = string.split(''),
    arrSize = newArr.length;

    for (i = 0; i < arrSize; i += 1) {
        if (newArr[size] === acc) {
            newArr.splice(size, 1);
        } else if (newArr[size] !== acc) {
            acc = newArr[size];
            size += size;
        }
    }
    return newArr.join('');
}


console.log(trimSymbols('xxx', 3)); // 'xxx' - нічого не видаляємо, дозволено 3 символа підряд
console.log(trimSymbols('xxx', 2)); // 'xx' - видаляємо один символ
console.log(trimSymbols('xxx', 1)); // 'x'

console.log(trimSymbols('xxxaaaaa', 2)); // 'xxaa'
console.log(trimSymbols('xxxaaaaab', 3)); // 'xxxaaab'