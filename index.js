const CarController = require("./class/controller/car.controller");

async function main() {
  try {
    const newCar = { name: "Pajero Sport", type: "Car", fuel: "Solar" };
    const carController = new CarController();
    carController.getEngineStarted();
    await carController.store(newCar);
    const cars = await carController.getAll();
    console.log(cars);
  } catch (error) {
    console.log(error);
  }
}

main();
