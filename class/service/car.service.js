class carService {
  constructor(carModel) {
    this.carModel = new Car();
  }

  getEngineStarted() {
    this.carModel.engineStart();
  }
}
