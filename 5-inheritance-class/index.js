var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age, gender, skill) {
        var _this = _super.call(this, name, age) || this;
        _this.gender = gender;
        _this.skill = skill;
        return _this;
    }
    Man.prototype.getGender = function () {
        return this.gender;
    };
    Man.prototype.getSkill = function () {
        return this.skill;
    };
    return Man;
}(Person));
var man = new Man("QuocTrung", 99, "Male", "Student");
console.log(man.getGender());
