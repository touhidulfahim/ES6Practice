//Class Declaration
class Vehicle {
    constructor(param1, param2, param3) {
        this.color = param1;
        this.brand = param2;
        this.price = param3;
    }
}

//let obj1=new Vehicle("Red","TOYOTA", 1200000.00);
//let obj2=new Vehicle("BLACK","TOYOTA", 1500000.00);

//console.log(obj1);
//console.log(obj2);

//Inheritance

class Car extends Vehicle {
    constructor(model, param1, param2, param3) {
        super(param1, param2, param3);
        this.ModelNo = model;
    }
}
let obj1 = new Car("X-Corolla", "Black", "TOYOTA", 1500000);
console.log(obj1);