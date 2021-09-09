const getLastWordLength = str => {
    let newArr = str.trim().split(' '),
    newArrSize = newArr.length,
    lastWord = newArr[newArrSize - 1],
    lastWordSize = lastWord.split('').length;

    return lastWordSize;
};

console.log(getLastWordLength('')); // 0
console.log(getLastWordLength('man in BlacK')); // 5
console.log(getLastWordLength('hello, world!  ')); // 6