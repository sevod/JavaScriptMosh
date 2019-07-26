//Lesson 90 Hoisting

walk(); //там можно
//Funcion Declaration
function walk() {
    console.log('walk');
}

//run(); //так нельзя, переменная еще не определена
//Anonymous Function Expression
const run = function () {
    console.log('run');
};
run();





