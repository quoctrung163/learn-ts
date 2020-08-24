class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  run(): void {
    console.log("Running........");
  }

  walk(): void {
    console.log("Walking..........");
  }

  say(): string {
    return "hello" + this.name + "iam trung" + this.age + "tuoi";
  }
}

const person = new Person("Felicity", 20);
person.run();
person.walk();
console.log(person.say());
