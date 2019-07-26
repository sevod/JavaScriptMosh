//Lesson 96 Local vs. Global Scope

const b = 'Global'; //Эта переменная будет доступна везде

function start(){
    const message = 'hi';
    if (true){
        const another = 'bye';
    }
    console.log(b); //если раскоментить строку ниже, то в этой функции будет своя b и будет ошибка потому что она объявляется ниже
    //const b = 'Global2'; 
    console.log(b);
    //console.log(another); // переменная отсюда не доступна    
}
start();
console.log(b);

//console.log(message); // переменная отсюда не доступна

