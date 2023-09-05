class Vehicle {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    engineStart() {
        console.log("Engine Started");
    }
}

class Car extends Vehicle {

}