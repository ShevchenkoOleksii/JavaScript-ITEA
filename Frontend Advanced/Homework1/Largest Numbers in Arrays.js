// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
//_______________________________________________________________________________________________________________

// function largestOfFour(arr) {
//     var max,
//     i,
//     j,
//     element,
//     elementSize,
//     size = arr.length;

//     for (i = 0; i < size; i += 1) {
//         element = arr[i];
//         max = element[0];
//         elementSize = element.length;

//         for (j = 0; j < elementSize; j += 1) {
//             if (element[j] >= max) {
//                 max = element[j];
//             } 
//         }
//         arr[i] = max;
//     }
//     return arr;
// }
// console.log('Largest Numbers in Arrays');
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));



function largestOfFour(arr) {
    var max,
        i,
        size = arr.length;

    for (i = 0; i < size; i += 1) {
        max = arr[i].reduce(function (a, b) {
            if (a > b) return a;
            return b;
        });
        arr[i] = max;
    }
    return arr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
