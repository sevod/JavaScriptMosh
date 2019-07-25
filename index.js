//Lesson 87 Get Max

const numbers = [3, 1, 2, 3, 4, 5, 6, 5];
console.log (Math.max(...numbers));

const count = getMax1(numbers);

console.log(count);

function getMax1(array) {
    if (array.length === 0) return undefined;
    return array.reduce((b, a) => (a > b) ? a : b);
}


