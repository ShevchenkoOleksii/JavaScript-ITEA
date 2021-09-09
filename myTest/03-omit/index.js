/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

const fruits = {
    apple: 2,
    orange: 4,
    banana: 3,
    mango: 6,
    grape: 7
};

const omit = (obj, ...fields) => {
    let i,
    argumentsSize = fields.length;

    for (i = 0; i < argumentsSize; i += 1) {
        if(obj[fields[i]]) {
            delete obj[fields[i]];
        }
    }
    return obj;
};

console.log(omit(fruits, 'apple', 'banana', 'grape'));