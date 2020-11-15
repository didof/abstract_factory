import { UnitGreek } from "../unit_model.js";
import RangeModel from "./range_model.js";

export default class RangeGreek extends UnitGreek implements RangeModel {
   private constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) {
      super(hp, attack, defence);
   }

   public static create(): RangeGreek {
      return new RangeGreek(60, 10, 4);
   }
}