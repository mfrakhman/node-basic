const fs = require("node:fs/promises");

class Vehicle {
  constructor(name, type, fuel) {
    this.name = name;
    this.type = type;
    this.fuel = fuel;
  }

  engineStart() {
    console.log("Engine Started");
  }

  async connect() {
    const file = await fs.readFile("./database/car.json", {
      encoding: "utf8",
    });
    return eval(file);
    // return JSON.parse(file);
  }

  async findAll() {
    try {
      return await this.connect();
    } catch (error) {
      console.log(error);
    }
  }

  async save(body) {
    try {
      const data = await this.connect();
      data.push(body);
      await fs.writeFile("./database/car.json", JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error);
    }
  }
}

class Car extends Vehicle {}

module.exports = Car;
