const CarService = require("../service/car.service");

class CarController {
  constructor() {
    this.carService = new CarService();
  }

  getEngineStarted() {
    this.carService.getEngineStarted();
  }

  async getAll() {
    return await this.carService.getAll();
  }

  async store(body) {
    await this.carService.store(body);
  }
}

module.exports = CarController;
