/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

const fruits = {
    apple: 2,
    orange: 4,
    banana: 3,
    mango: 6,
    grape: 7
};

const pick = (obj, ...fields) => {
    let newObj = {},
    i,
    argumentsSize = fields.length;

    for (i = 0; i < argumentsSize; i += 1) {
        if(obj[fields[i]]) {
            newObj[fields[i]] = obj[fields[i]];
        }
    }
    return newObj;
};

console.log(pick(fruits, 'apple', 'banana', 'grape'));