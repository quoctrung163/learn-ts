var passcode = '123456aa';

class Person {
  private _name: string;
  private _age: number;
  set name(name: string) {
    if (passcode === 'quoctrung') {
      this._name = name;
    } else {
      this._name = "sai passcode. ko dc sd phuoong thuc nay";
    }
  }
  get name(): string {
    if (passcode === 'quoctrung') {
      return this._name;
    } else {
      return "loi" + this._name;
    }
  }
}

const person = new Person();
person.name = 'quoctrung';
console.log(person.name);

// wrong passcode
passcode = '';
person.name = "quoctrung163";
console.log(person.name);

// again paste passcode
passcode = '123456aa';
person.name = "quoctrung163";
console.log(person.name);