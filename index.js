//Lesson 86 Count Occurrences

const numbers = [1, 2, 3, 4, 5, 6, 1];

const count = countOccurrences(numbers, 2);

console.log(count);

function countOccurrences(array, searchElement) {
    let count = 0;
    // for (const element of array) 
    //     if (element === searchElement) 
    //         count++;    
    // return count;    
    count = array.reduce((accumulator, current) => {
        if (current === searchElement) 
            accumulator += 1
        return accumulator;
        }, 0);
    return count;
}


