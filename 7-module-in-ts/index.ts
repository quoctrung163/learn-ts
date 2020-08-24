console.log('Module basic');
module Module {
  export class String {
    str: string;
    constructor(str: string = '') {
      this.str = str;
    }

    uppercase(str: string = this.str): string {
      return str.toUpperCase();
    }

    lowercase(str: string = this.str): string {
      return str.toLowerCase();
    }

    random(subStr: number = 6): string {
      return Math.random().toString(36).substring(subStr);
    }
  }

  class Number {
    plus(number1: number = 0, number2: number = 0): number {
      return number1 + number2;
    }
  }
}

const str = new Module.String();
console.log(str.uppercase('Hello World'));

