//Lesson 95 Try and Catch

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error('Value is not a string.'); //тут записывается ошибка, данные о которой идут дальше
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

try {
    person.fullName = '';    
} catch (error) {
    console.log(error);
}


console.log(person.fullName);


