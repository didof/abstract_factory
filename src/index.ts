import AbstractFactory, { ConcreteFactoryNorse as Norse, ConcreteFactoryGreek as Greek } from "./abstract_factory.js";
import UnitModel from "./model/units/unit_model.js";

enum UnitType {
   melee,
   range,
   cavalry,
}

function generateUnit(factory: AbstractFactory, unitType: UnitType): UnitModel {
   let unit: UnitModel;
   switch (unitType) {
      case UnitType.melee:
         unit = factory.createMelee();
         break;
      case UnitType.range:
      default:
         unit = factory.createRange();
         break;
   }
   console.log(unit);

   // Do other stuff

   return unit;
}

const Odin = new Norse();
const Zeus = new Greek();

generateUnit(Odin, UnitType.melee);
generateUnit(Zeus, UnitType.range);