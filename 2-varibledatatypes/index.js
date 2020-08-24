// String
var chuoi = "chuoi bat ky";
// Number
var so = 123456;
// Boolean
var bool = true;
// Mang cua chuoi (String Array)
var chuoiArr = ["1", "2", "3"];
console.log(chuoiArr);
// Mang cua so (Number Array)
var soArr = [1, 2, 3];
console.log(soArr);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var green = Color.Green;
var red = Color[2];
console.log(green);
console.log(red);
// Object
var obj = {
    childObj: {
        grandChlildObj: {}
    }
};
console.log(obj);
// Ham khong tra ve
function hamkhongcantrave() {
    console.log('khong can tra ve');
}
hamkhongcantrave();
