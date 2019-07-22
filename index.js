//Lesson 78
const numbers = [1, -2, 3];

//проверяет все элементы
const allPositive = numbers.every (function(value){
        return value >=0;
});


//проверяет пока не найдет совпадение, затем прерывает
const allPositive1 = numbers.some (function(value){
    return value <=0;
});

console.log(allPositive1);

