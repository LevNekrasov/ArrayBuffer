/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import MathCalc from './mathChar';

export default class Magician extends MathCalc {
  constructor(name, type, distance) {
    super(name, type, distance);
    this.attack = 10;
    this.defence = 40;
  }
}
