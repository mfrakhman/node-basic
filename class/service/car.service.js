const Car = require("../model/vehichle");

class CarService {
  constructor() {
    this.carModel = new Car();
  }

  getEngineStarted() {
    this.carModel.engineStart();
  }

  async getAll() {
    return await this.carModel.findAll();
  }

  async store(body) {
    if (body.type == "Car") {
      const car = new Car(body.name, body.type, body.fuel);
      await this.carModel.save(car);
    } else {
      console.log("not a car");
    }
  }
}

module.exports = CarService;
