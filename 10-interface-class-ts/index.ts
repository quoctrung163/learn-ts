// create class and interface

interface PersonInstance {
  new(name: string, age: number);
}

interface PersonInterface {
  name: string;
  age: number;
  getName: string;
  setName(name: string): any;
  getAge(): number;
}

interface Person2Interface {
  setAge(age: number): any;
  getPerson(): any;
  setPerson({
    name: string,
    age: number
  }): any;
}

class Person implements PersonInterface, Person2Interface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.setPerson({
      name: name,
      age: age
    });
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): any {
    this.name = name;
    return this;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): any {
    this.age = age;
    return this;
  }

  getPerson(): any {
    return {
      name: this.name,
      age: this.age
    };
  }

  setPerson(person: {
    name: string,
    age: number
  }): any {
    this.name = person.name;
    this.age = person.age;
  }
}

const person: PersonInstance = Person;
const newPerson = new person('quoc trung', 20);

console.log(newPerson);
