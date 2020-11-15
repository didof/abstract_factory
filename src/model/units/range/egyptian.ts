import { UnitEgyptian } from "../unit_model.js";
import RangeModel from "./range_model.js";

export default class RangeEgyptian extends UnitEgyptian implements RangeModel {
   private constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) {
      super(hp, attack, defence);
   }

   public static create(): RangeEgyptian {
      return new RangeEgyptian(80, 10, 20);
   }
}