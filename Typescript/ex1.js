var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.greet = function () {
        console.log("hello, my name is ".concat(this.name));
    };
    return person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, grade) {
        var _this = _super.call(this, name) || this;
        _this.grade = grade;
        return _this;
    }
    student.prototype.displayInfo = function () {
        console.log("".concat(this.name, " is in grade ").concat(this.grade));
    };
    return student;
}(person));
//constructor method
var students = new student("pushpa", 9);
// students.displayInfo();
students.greet();
