/**
 * @function
 * @property {string} 
 * 
 */
function stringFunc(): string {
  return "this is an string";
}

function numberFunc(): number {
  return 123;
}

function stringArrFunc(): string[] {
  return ["1", "2", "3"];
}

function numberArrFunc(): number[] {
  return [1, 2, 3];
}

function anyFunc(): any {
  return {
    childObj: {

    }
  }
}

function hello(name: string, age: number): string {
  return "Xin chao ban" + "toi ten la" + name + " " + age + "tuoi";
}

console.log(hello("QuocTrung", 20));

const helloOther: (name: string, age: number) => string = function (name, age) {
  return "Xin chao ban" + "toi ten la" + name + " " + age + "tuoi";
}
console.log(helloOther("QuocTrung", 20));

function sumNumber(x: number = 20, y: number = 75) {
  return x + y;
};

console.log(sumNumber());

/**
 * Ham co doi so tuy chon
 */
function option(x: string, y?: number): any {
  if (y) {
    return y;
  }
  return x;
}

console.log(option("hello world", 999));
console.log(option("hello world"));
