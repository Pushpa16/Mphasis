var Employee = /** @class */ (function () {
    function Employee(id, name, m_id, dept_id, did) {
        this.id = id;
        this.name = name;
        this.m_id = m_id;
        this.dept_id = dept_id;
        this.did = did;
        this.id = id;
        this.name = name;
        this.m_id = m_id;
        this.dept_id = dept_id;
    }
    Employee.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", name:").concat(this.name, ", Manager_id:").concat(this.m_id, ", Department_id:").concat(this.dept_id));
    };
    return Employee;
}());
var Manager = /** @class */ (function () {
    function Manager(id, name, m_id, dept_id, did) {
        this.id = id;
        this.name = name;
        this.m_id = m_id;
        this.dept_id = dept_id;
        this.did = did;
        this.id = id;
        this.name = name;
        this.m_id = m_id;
        this.dept_id = dept_id;
    }
    Manager.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", name:").concat(this.name, ", Manager_id:").concat(this.m_id, ", Department_id:").concat(this.dept_id));
    };
    return Manager;
}());
var Department = /** @class */ (function () {
    function Department(did, name) {
        this.did = did;
        this.name = name;
        this.did = did;
        this.name = name;
    }
    return Department;
}());
var emp = new Employee(1, 'pushpa', 2, 3, 4);
console.log(emp);
