// create class and interface
class Person {
    constructor(name, age, skill) {
        this.setPerson({
            name: name,
            age: age,
            skill: skill
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
    getSkill() {
        return this.skill;
    }
    setSkill(skill) {
        this.skill = skill;
        return this;
    }
    getPerson() {
        return {
            name: this.name,
            age: this.age,
            skill: this.skill
        };
    }
    setPerson(person) {
        this.name = person.name;
        this.age = person.age;
        this.skill = person.skill;
    }
}
const person = Person;
const newPerson = new person('quoc trung', 20, 'student');
console.log(newPerson);
