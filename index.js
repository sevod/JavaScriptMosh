//Lesson 83 Includes

const numbers = [1, 2, 3, 4, 'a'];

//console.log(numbers.includes('a'));

console.log(includes(numbers, 'a'));

function includes(array, searchElemetn) {
    for (const key of array) {
        if (key === searchElemetn)
            return true;
    }
    return false;
}