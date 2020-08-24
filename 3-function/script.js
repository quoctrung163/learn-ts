/**
 * @function
 * @property {string}
 *
 */
function stringFunc() {
    return "this is an string";
}
function numberFunc() {
    return 123;
}
function stringArrFunc() {
    return ["1", "2", "3"];
}
function numberArrFunc() {
    return [1, 2, 3];
}
function anyFunc() {
    return {
        childObj: {}
    };
}
function hello(name, age) {
    return "Xin chao ban" + "toi ten la" + name + " " + age + "tuoi";
}
console.log(hello("QuocTrung", 20));
var helloOther = function (name, age) {
    return "Xin chao ban" + "toi ten la" + name + " " + age + "tuoi";
};
console.log(helloOther("QuocTrung", 20));
function sumNumber(x, y) {
    if (x === void 0) { x = 20; }
    if (y === void 0) { y = 75; }
    return x + y;
}
;
console.log(sumNumber());
/**
 * Ham co doi so tuy chon
 */
function option(x, y) {
    if (y) {
        return y;
    }
    return x;
}
console.log(option("hello world", 999));
console.log(option("hello world"));
