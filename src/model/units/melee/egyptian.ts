import { UnitEgyptian } from "../unit_model.js";
import MeleeModel from "./melee_model.js";

export default class MeleeEgyptian extends UnitEgyptian implements MeleeModel {
   private constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) {
      super(hp, attack, defence);
   }

   public static create(): MeleeEgyptian {
      return new MeleeEgyptian(80, 10, 20);
   }
}