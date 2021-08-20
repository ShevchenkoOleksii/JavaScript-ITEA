// String.prototype.startsWith()

// let someString = 'Text';
// let someString2 = 22;
// let searchString = 'ex';

// function startsWith(mainString, searchString, position) {
//     let typeOfData = typeof mainString,
//         sizeSomeString = mainString.length,
//         sizeSearchString = searchString.length,
//         result,
//         i;

//     if (typeOfData !== 'string') {
//         throw Error(`${mainString} must be a string!!!` )

//     } else if(sizeSomeString < sizeSearchString) {
//         throw Error(`${searchString} is too long!!!` )
//     }
    
//     if(typeof position === 'number') {
        
//         for(i = 0; i < sizeSearchString; i += 1) {
//             if(mainString[position + i] === searchString[i]) {
//                 result = true;
//             } else {
//                 result = false;
//             }
//         return result;    
//         }

//     } else {
//         position = 0;

//         for(i = 0; i < sizeSearchString; i += 1) {
//             if(mainString[position + i] === searchString[i]) {
//                 result = true;
//             } else {
//                 result = false;
//             }
//         return result;    
//         }
//     }
    
// }
// console.log(startsWith(someString, searchString, 1));
// console.log(startsWith(someString2, searchString, 0));
// console.log(someString.startsWith(searchString, 1));

//------------------------------------------------------------------------------------------------------

// String.prototype.endsWith()

// let someString = 'Text eeex';
// let someString2 = 22;
// let searchString = 'ex';

// function endsWith(mainString, searchString, position) {
//     let typeOfData = typeof mainString,
//         sizeSomeString = mainString.length,
//         sizeSearchString = searchString.length,
//         result,
//         i;

//     if (typeOfData !== 'string') {
//         throw Error(`${mainString} must be a string!!!` )
//     } else if(sizeSomeString < sizeSearchString) {
//         throw Error(`${searchString} is too long!!!` )
//     }
    
//     if(typeof position === 'number') {
        
//         for(i = 0; i < sizeSearchString; i += 1) {
//             if(mainString[position + i] === searchString[i]) {
//                 result = true;
//             } else {
//                 result = false;
//             }
//         return result;    
//         }

//     } else {
//         position = sizeSomeString - 1;

//         for(i = 0; i < sizeSearchString; i += 1) {
//             if(mainString[position - i] === searchString[sizeSearchString - 1 - i]) {
//                 result = true;
//             } else {
//                 result = false;
//             }
//         return result;    
//         }
//     }
    
// }
// console.log(endsWith(someString, searchString));

//------------------------------------------------------------------------------------------------------

// String.prototype.repeat()

// function repeat(data, count) {
//     if(typeof data !== 'string') {
//         throw Error(`${data} must be a string!!!`)
//     }

//     if(count < 0) {
//         throw Error(`${count} must be >= 0!!!`)
//     }

//     if(typeof count !== 'number') {
//         throw Error(`${count} must be a number!!!`)
//     }

//     let newData = '',
//     i;

//     for(i = 0; i < count; i += 1) {
//         newData += data;
//     }
//     return newData;
// }

// console.log(repeat('Kyiv_', 5));

//------------------------------------------------------------------------------------------------------

// String.prototype.includes()

// let someString = 'Text lol eeex';
// let searchString = 't';

// function includes(data, searchString, position) {
//     let i,
//     j,
//     sizeData = data.length,
//     sizeSearchString = searchString.length,
//     result;

//     if (typeof data !== 'string') {
//         throw Error(`${data} must be a string!!!`)
//     }

//     if (position < 0) {
//         throw Error(`${position} must be >= 0!!!`)
//     }

//     if (typeof position !== 'number') {
//         position = 0;
//     }

//     for(i = 0; i < sizeData; i += 1) {

//         if(data[position + i] === searchString[0]) {

//             for(j = 0; j < sizeSearchString; j += 1) {

//                 if(data[position + i + j] === searchString[0 + j]) {
//                     result = true;
//                     if(j === sizeSearchString - 1) {
//                         return result;
//                     }
//                 } else {
//                     result = false;
//                 }
//             }
//         } else {
//             result = false;
//         }
//     }
//     return result;
// }

// console.log(includes(someString, searchString, 3));

//------------------------------------------------------------------------------------------------------

// Object.assign()

// const objOne = {
//     a: 'a'
// };

// const objTwo = {
//     b: 'b'
// };

// const objThree = {
//     c: 'c'
// };

// const mainObj = {
//     b: 'lol',
//     v: 555
// };

// function assign() {
//     let i,
//     newObj = {},
//     sizeArguments = arguments.length;
    
//     for(i = 0; i < sizeArguments; i += 1) {
//         if(typeof arguments[i] !== 'object') {
//             throw Error(`${arguments[i]} must be an object!!!`)
//         }
//         for(let prop in arguments[i]) {
//             newObj[prop] = arguments[i][prop];
//         }
//     }
    
//     return newObj;
// }
// console.log(assign(objOne, objTwo, objThree, mainObj));
