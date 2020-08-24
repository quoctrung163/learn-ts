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

class Man extends Person {
  gender: string;
  skill: string;
  constructor(name: string, age: number, gender: string, skill: string) {
    super(name, age);
    this.gender = gender;
    this.skill = skill;
  }

  getGender(): string {
    return this.gender;
  }

  getSkill(): string {
    return this.skill;
  }
}

const man = new Man("QuocTrung", 99, "Male", "Student");
console.log(man.getGender());

