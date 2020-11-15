import MeleeEgyptian from "./model/units/melee/egyptian.js";
import MeeleGreek from "./model/units/melee/greek.js";
import MeleeModel from "./model/units/melee/melee_model.js";
import MeleeNorse from "./model/units/melee/norse.js";
import RangeEgyptian from "./model/units/range/egyptian.js";
import RangeGreek from "./model/units/range/greek.js";
import RangeNorse from "./model/units/range/norse.js";
import RangeModel from "./model/units/range/range_model.js";

export default interface AbstractFactory {
   createMelee(): MeleeModel;

   createRange(): RangeModel;

   // createCavalry(): AbstractCavalry;
}

export class ConcreteFactoryGreek implements AbstractFactory {
   createMelee(): MeleeModel {
      return MeeleGreek.create();
   }

   createRange(): RangeModel {
      return RangeGreek.create();
   }

   // createCavalry() {
   //    return new ConcreteCavalryGreek();
   // }
}

export class ConcreteFactoryEgyptian implements AbstractFactory {
   createMelee(): MeleeModel {
      return MeleeEgyptian.create();
   }

   createRange(): RangeModel {
      return RangeEgyptian.create();
   }

   // createCavalry() {
   //    return new ConcreteCavalryEgyptian();
   // }
}

export class ConcreteFactoryNorse implements AbstractFactory {
   createMelee(): MeleeModel {
      return MeleeNorse.create();
   }

   createRange(): RangeModel {
      return RangeNorse.create();
   }

   // createCavalry() {
   //    return new ConcreteCavalryNorse();
   // }
}