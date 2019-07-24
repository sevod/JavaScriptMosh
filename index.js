//Lesson 85 Moving an Element

const numbers = [1, 2, 3, 4, 5, 6];

const output = move(numbers, 0, 2);

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position < 0 || position >= array.length) console.error ('Error2');
    else {
        const output = [...array];
        const element = output.splice(index, 1)[0];
        output.splice(position, 0, element);
        return output;
    }    
}

//my Error
function moveChenge(array, index, offset) {
    if (index + offset <= 0) console.error ('Error1');
    else if (index + offset > array.length) console.error ('Error2');
    else {
    const a = array[index - 1];
    const b = array[index + offset - 1];
    array[index - 1] = b;
    array[index + offset - 1] = a;
    return array;
    }
}


