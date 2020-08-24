// String
var chuoi: string = "chuoi bat ky";

// Number
var so: number = 123456;

// Boolean
var bool: boolean = true;

// Mang cua chuoi (String Array)
var chuoiArr: string[] = ["1", "2", "3"];

console.log(chuoiArr);

// Mang cua so (Number Array)
var soArr: number[] = [1, 2, 3];
console.log(soArr);

// Enum
enum Color { Red, Green, Blue };
var green: Color = Color.Green;
var red: string = Color[2];
console.log(green);
console.log(red);

// Object
var obj: any = {
  childObj: {
    grandChlildObj: {

    }
  }
}

console.log(obj);

// Ham khong tra ve
function hamkhongcantrave(): void {
  console.log('khong can tra ve');
}

hamkhongcantrave();