//----------------------------------------------------------------------------------------
// Palindrome Checker
//----------------------------------------------------------------------------------------
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
//----------------------------------------------------------------------------------------

// const regExp = new RegExp(/[^A-Za-z0-9]/gi);
// let result,
// reverceResult;

// function palindrome(str) {
//     result = str.replace(regExp, '').toLowerCase();
//     reverseResult = result.split('').reverse().join('');

//     if(result === reverseResult) {
//         return true;
//     }
//     return false;
// }
   
// console.log(palindrome("eye"));
// console.log(palindrome("_eye"));
// console.log(palindrome("race car"));
// console.log(palindrome("not a palindrome"));
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("never odd or even"));
// console.log(palindrome("nope"));
// console.log(palindrome("almostomla"));
// console.log(palindrome("My age is 0, 0 si ega ym."));
// console.log(palindrome("1 eye for of 1 eye."));
// console.log(palindrome("0_0 (: /-\ :) 0-0"));
// console.log(palindrome("five|\_/|four"));

//----------------------------------------------------------------------------------------
// Roman Numeral Converter
//----------------------------------------------------------------------------------------
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
//----------------------------------------------------------------------------------------

const objOfNum = {M:1000,
                CM:900,
                D:500,
                CD:400,
                C:100,
                XC:90,
                L:50,
                XL:40,
                X:10,
                IX:9,
                V:5,
                IV:4,
                I:1};

function convertToRoman(num) {
    let result = '',
        key;

    for (key in objOfNum ) {

        while (num >= objOfNum[key] ) {
            result += key;
            num -= objOfNum[key];
        }

    }
    return result;
}

console.log(convertToRoman(36));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(3999));
console.log(convertToRoman(649));
console.log(convertToRoman(99));
//----------------------------------------------------------------------------------------

