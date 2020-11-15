import MeleeEgiptian from "./melee/egyptian.js";
import MeeleGreek from "./melee/greek.js";
import MeleeNorse from "./melee/norse.js";

export default interface UnitModel {
   hp: number;
   attack: number;
   defence: number;
}

export abstract class UnitGreek implements UnitModel {
   static expressions = ['Etimos', 'Etimi', 'Prostagma', 'Lege', 'Orthos', 'Malista', 'Ne', 'Kalos', 'Vulome', 'Metalefs', 'thireftis', 'Vouforgos', 'Drytomos', 'Agrotis', 'Pame', 'Proseche', 'Eis machin', 'eisvoli'];

   constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) { }
}

export abstract class UnitEgyptian implements UnitModel {
   constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) { }
}

export abstract class UnitNorse implements UnitModel {
   constructor(
      public hp: number,
      public attack: number,
      public defence: number,
   ) { }
}