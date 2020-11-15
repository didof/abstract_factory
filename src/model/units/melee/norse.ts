import { UnitNorse } from "../unit_model.js";
import MeleeModel from "./melee_model.js";

export default class MeleeNorse extends UnitNorse implements MeleeModel {
   private constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) {
      super(hp, attack, defence);
   }

   public static create(): MeleeNorse {
      return new MeleeNorse(100, 16, 14);
   }
}