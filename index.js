//Lesson 81 Reducing an Array

const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) 
    sum += n;

console.log(sum);

const sum2 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0); //0 это с какого числа ведет отсчет accumulator, по умолчанию 0

console.log(sum2);