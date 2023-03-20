import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SandboxController } from "./Controllers/SandboxController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokemonsController = new PokemonsController()
  sandboxController = new SandboxController()
}

window["app"] = new App();
