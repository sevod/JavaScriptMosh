//Lesson 84 Except

const numbers = [1, 6, 1, 2, 3, 4];

const output = except(numbers, [2, 6]);

console.log(output);

//my
function except(array, excluded) {
  for (let i = 0; i < excluded.length; i++) {
    const element = excluded[i];
    while (array.indexOf(element) != -1)
      array.splice(array.indexOf(element),1);}
  return array;
}

