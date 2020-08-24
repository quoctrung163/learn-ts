// create class and interface

interface PersonInstance {
  new(name: string, age: number, skill: string);
}

interface PersonInterface {
  name: string;
  age: number;
  getName(): string;
  setName(name: string): any;
  getAge(): number;
}

interface Person2Interface {
  setAge(age: number): any;
  getPerson(): any;
  setPerson({
    name: string,
    age: number,
  }): any;
}

interface Man extends Person2Interface, PersonInterface {
  skill: string,
  getSkill(): string;
  setSkill(skill: string): any
}

class Person implements Man {
  name: string;
  age: number;
  skill: string;
  constructor(name: string, age: number, skill: string) {
    this.setPerson({
      name: name,
      age: age,
      skill: skill
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

  getSkill(): string {
    return this.skill;
  }

  setSkill(skill: string): any {
    this.skill = skill;
    return this;
  }

  getPerson(): any {
    return {
      name: this.name,
      age: this.age,
      skill: this.skill
    };
  }

  setPerson(person: {
    name: string,
    age: number,
    skill: string
  }): any {
    this.name = person.name;
    this.age = person.age;
    this.skill = person.skill;
  }
}

const person: PersonInstance = Person;
const newPerson = new person('quoc trung', 20, 'student');

console.log(newPerson);
