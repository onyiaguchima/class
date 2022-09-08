class Cat {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    eat(){
        return `${this.name} is eating bones`;
    }
}

class Dog extends Cat{
    constructor(name, age, livesleft = 10){
        // this.name = name;
        // this.age = age;
        super(name,age);
    }
}

const naijadog = new Dog("bingo", 23);

console.log(naijadog);