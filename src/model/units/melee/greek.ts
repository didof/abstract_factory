import { UnitGreek } from "../unit_model.js";
import MeleeModel from "./melee_model.js";

export default class MeeleGreek extends UnitGreek implements MeleeModel {
   private constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) {
      super(hp, attack, defence);
   }

   public static create() {
      return new MeeleGreek(85, 12, 16);
   }
}