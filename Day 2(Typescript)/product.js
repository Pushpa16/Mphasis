var customer = /** @class */ (function () {
    function customer(id, name, email, salary, company) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.company = company;
        this.id = id;
        this.name = name;
        this.email = email;
        this.salary = salary;
    }
    customer.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", name:").concat(this.name, ",email:").concat(this.email, ", salary:").concat(this.salary));
    };
    return customer;
}());
var supplier = /** @class */ (function () {
    function supplier(id, name, email, salary, company) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.company = company;
        this.id = id;
        this.name = name;
        this.email = email;
        this.company = company;
    }
    supplier.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", name:").concat(this.name, ",email:").concat(this.email, ", company:").concat(this.company));
    };
    return supplier;
}());
var product = /** @class */ (function () {
    function product(id, name, price, stock, orderDate, qty, email, salary, company, custid, prodid) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.orderDate = orderDate;
        this.qty = qty;
        this.email = email;
        this.salary = salary;
        this.company = company;
        this.custid = custid;
        this.prodid = prodid;
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    product.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", name:").concat(this.name, ",price:").concat(this.price, ", stock:").concat(this.stock));
    };
    return product;
}());
var qty1 = 10;
var order = /** @class */ (function () {
    function order(id, name, price, stock, orderDate, qty, email, salary, company, custid, prodid) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.orderDate = orderDate;
        this.qty = qty;
        this.email = email;
        this.salary = salary;
        this.company = company;
        this.custid = custid;
        this.prodid = prodid;
        this.id;
        qty1 = qty;
        this.orderDate = orderDate;
    }
    order.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", name:").concat(this.name, ",qty:").concat(qty1, ", orderdate:").concat(this.orderDate));
    };
    return order;
}());
var cust = new customer(1, 'pushpa', 'push@gmail.com', 300, 'Mphasis');
cust.getDetails();
var ode = new order(10, 'pushpa', 15000, 'Mphasis', 'push', qty1, 'push@', 73, 'hi', 63, 69);
console.log(ode);
ode.getDetails();
