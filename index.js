//Lesson 97 Let vs Var

//var => function-scoped
//ES6 (ES2015): let, const => block-scoped


var color = 'red'; 
console.log(window.color); //данные попали в window
let age = 30;
console.log(window.age); //данные не попали в window

//sayHi пападет в window, это плохая практика
function sayHi(){
    console.log('hi it window');
};
window.sayHi();

function start() {
    for (var i = 0; i < 5; i++) //var имеет другую область видимость чем let
        console.log(i);
    console.log(i);        
}

start();

console.log(i); //здесь var недоступно

