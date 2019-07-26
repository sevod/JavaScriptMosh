//Lesson 94 Getters and Setters

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

//setters => change (mutate) them
person.fullName = 'John Smith';
//getters => access properies
//console.log(person.fullName);
console.log(person.fullName);

//console.log(`${person.firstName} ${person.lastName}`)



