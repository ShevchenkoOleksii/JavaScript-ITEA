// var str = 'rotoR';

// function palindrome(str) {
//     return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
// }

// console.log(palindrome(str));

//-------------------------------------------------------------------------------

var str = 'rotoR';

function palindrome(str) {
    var i,
    size = str.length,
    reverseStr = '';

    for(i = size - 1; i >= 0; i -= 1) {
        reverseStr += str[i];
    }
    return reverseStr.toLowerCase() === str.toLowerCase();
}

console.log(palindrome(str));