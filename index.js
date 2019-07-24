//Lesson 82 exercise 1 Array from Range

const numbers = arrayFromRange(-10, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    let output = [];
    for (min; min <= max; min++) 
        output.push(min);               
    return output;
}