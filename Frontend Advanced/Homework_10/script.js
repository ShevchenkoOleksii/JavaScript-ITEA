//----------------------------------------------------------------------------------------
// Sales by Match
//----------------------------------------------------------------------------------------
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//----------------------------------------------------------------------------------------

// const  largePileOfSocks = [7, 2, 3, 5, 5, 5, 2, 3, 5, 1, 7, 8, 9, 9, 9, 9, 9, 9];
// let numberOfSocks = largePileOfSocks.length;

// function sockMerchant(largePileOfSocks) {
//     let i,
//     normalPileOfSocks = [],
//     objOfSocks = {};

//     for(i = 0; i < numberOfSocks; i += 1) {
//         if(objOfSocks[largePileOfSocks[i]]) {
//             delete objOfSocks[largePileOfSocks[i]];
//             normalPileOfSocks.push(largePileOfSocks[i]);
//         } else {
//             objOfSocks[largePileOfSocks[i]] = largePileOfSocks[i];
//         }
//     }
//     return normalPileOfSocks.length;
// }

// console.log(sockMerchant(largePileOfSocks));

//----------------------------------------------------------------------------------------
// Counting Valleys
//----------------------------------------------------------------------------------------
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
//----------------------------------------------------------------------------------------
// function countingValleys(steps) {
//     let arr = steps.split(''),
//     i,
//     sizeSteps = arr.length,
//     path = 0,
//     numberOfValleys = 0;

//     for(i = 0; i < sizeSteps; i += 1) {
//         if(arr[i] === 'U') {
//             path +=1;
//         } else {
//             path -=1;
//         }
//         if (path === -1 && arr[i] === 'D') {
//             numberOfValleys +=1;
//         }
//     }
//     return numberOfValleys;

// }

// console.log(countingValleys('UDDUUUDD'));
// console.log(countingValleys('UDDDUDUU'));
// console.log(countingValleys('DDUUDDUUDDUUDDUUDD'));

//----------------------------------------------------------------------------------------
// Jumping on the Clouds
//----------------------------------------------------------------------------------------
// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.
//----------------------------------------------------------------------------------------

// function jumpingOnTheClouds(clouds) {
//     let sizeClouds = clouds.length,
//     i,
//     jumps = 0;

//     for(i = 0; i < sizeClouds; i += 1) {
//         if(clouds[i + 2] === 0) {
//             i += 1;
//             jumps += 1;
//         } else if(clouds[i + 1] === 0) {
//             jumps += 1;
//         } else if(clouds[i] === 1) {
//             i -= 1;
//         }
//     }
//     return jumps;
// }

// console.log(jumpingOnTheClouds([0, 0, 1, 0, 0, 1, 0]));
// console.log(jumpingOnTheClouds([0, 0, 0, 0, 1, 0]));
//----------------------------------------------------------------------------------------
// Repeated String
//----------------------------------------------------------------------------------------
// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
//----------------------------------------------------------------------------------------

function repeatedString(str, n) {
    const symb = 'a';
    let newStr,
    sizeStr = str.length,
    result;
    if(typeof n !== 'number' || n < 0) {
        throw new Error('Error!!!');
    } else if(sizeStr > n) {
        newStr = str.substring(0, n);
    } else {
        newStr = str.padEnd(n, str);
    }
    result = newStr.split('').filter(key => key === symb);
    return result.length;
}
console.log(repeatedString('abcac', 2));
console.log(repeatedString('abcac', 22));
console.log(repeatedString('abcac', 0));
console.log(repeatedString('abcac', 10));
console.log(repeatedString('abcac', '2'));



