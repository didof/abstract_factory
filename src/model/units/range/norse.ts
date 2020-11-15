import { UnitNorse } from "../unit_model.js";
import RangeModel from "./range_model.js";

export default class RangeNorse extends UnitNorse implements RangeModel {
   private constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) {
      super(hp, attack, defence);
   }

   public static create(): RangeNorse {
      return new RangeNorse(14, 14, 12);
   }
}