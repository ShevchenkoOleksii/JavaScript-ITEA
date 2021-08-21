// Union, Intersection, Difference - new Set([1, 2, 3]) | new Set([4, 3, 2])

// Intersection

const setA = new Set([1, 2, 3,]);
const setB = new Set([4, 3, 2,]);

const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection);

// Union

const union = new Set([...setA, ...setB]);
console.log(union);

// Difference

const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference);