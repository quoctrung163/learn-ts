console.log('Module basic');
var Module;
(function (Module) {
    class String {
        constructor(str = '') {
            this.str = str;
        }
        uppercase(str = this.str) {
            return str.toUpperCase();
        }
        lowercase(str = this.str) {
            return str.toLowerCase();
        }
        random(subStr = 6) {
            return Math.random().toString(36).substring(subStr);
        }
    }
    Module.String = String;
    class Number {
        plus(number1 = 0, number2 = 0) {
            return number1 + number2;
        }
    }
})(Module || (Module = {}));
const str = new Module.String();
console.log(str.uppercase('Hello World'));
