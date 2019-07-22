//Lesson 77 Sorting Arrays
const numbers = [2, 3, 1]; 
numbers.sort();
//console.log(numbers);

numbers.reverse();
//console.log(numbers);

const courses = [
    {id:1, name: 'Node.js'},
    {id:2, name: 'JavaScript'},
];

courses.sort(function(a, b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(courses);

const courses2 = [
    {id:1, name: 'Node.js'},
    {id:2, name: 'javaScript'}, //J => j
];

courses2.sort(function(a, b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses2);