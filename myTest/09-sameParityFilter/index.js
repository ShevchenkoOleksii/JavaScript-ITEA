const sameParityFilter = (arr = []) => {
    let num = arr[0],
    newArr = [];

    arr.map(function(elem) {
        if (num % 2 === 0) {
            if (elem % 2 === 0) {
                newArr.push(elem);
            }
        }
        if (num % 2 !== 0) {
            if (elem % 2 !== 0) {
                newArr.push(elem);
            }
        }
    })

    return newArr;
}
console.log(sameParityFilter([-1, 0, 1, -3, 10, -2]));; // [-1, 1, -3]
console.log(sameParityFilter([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParityFilter([])); // []