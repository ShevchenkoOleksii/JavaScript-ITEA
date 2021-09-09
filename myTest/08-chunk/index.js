const arrayOfArrays = (arr = [], size = 0) => {
    let newArr = [],
    i,
    arrSize = arr.length,
    partOfArr;

    for (i = 0; i < arrSize; i += size) {
        partOfArr = arr.slice(i, size + i);
        newArr.push([partOfArr]);
    }
    return newArr;
};


console.log(arrayOfArrays(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]

console.log(arrayOfArrays(['a', 'b', 'c', 'd'], 3)); // [['a', 'b', 'c'], ['d']]