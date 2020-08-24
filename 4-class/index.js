var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.run = function () {
        console.log("Running........");
    };
    Person.prototype.walk = function () {
        console.log("Walking..........");
    };
    Person.prototype.say = function () {
        return "hello" + this.name + "iam trung" + this.age + "tuoi";
    };
    return Person;
}());
var person = new Person("Felicity", 20);
person.run();
person.walk();
console.log(person.say());
