//Lesson 89 Function Declarations vs. Expressions

//Funcion Declaration
function walk() {
    console.log('walk');
}
walk();

//Anonymous Function Expression
const run = function () {
    console.log('run');
};
let move = run;
move();
run();

//Named Function Expression
let run2 = function run2() {
    console.log('run2');
};
run2();




