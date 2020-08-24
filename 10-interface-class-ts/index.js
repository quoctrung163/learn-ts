// create class and interface
class Person {
    constructor(name, age) {
        this.setPerson({
            name: name,
            age: age
        });
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    getPerson() {
        return {
            name: this.name,
            age: this.age
        };
    }
    setPerson(person) {
        this.name = person.name;
        this.age = person.age;
    }
}
const person = Person;
const newPerson = new person('quoc trung', 20);
console.log(newPerson);
