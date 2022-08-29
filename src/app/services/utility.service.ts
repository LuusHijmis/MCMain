import { Injectable } from '@angular/core';
import {StringEnum} from "../string.enum";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  randomizer(): number {
    const getal = 1+ (Math.random()*3);
    return Math.round(getal);
  }

  numberOfCorrectPositions(numberOfRows: number, numberOfColumns: number): number {
    let tileCount: number = 1;
    let countCorrectPositions: number = 0;
    for (let i = 1; i < numberOfRows +1; i++) {
      for (let j = 1; j < numberOfColumns + 1; j++) {
        const Tile = document.getElementById(StringEnum.cell + i + j)?.className;
        const checkValue = StringEnum.tile + tileCount;
        tileCount++;
        if (checkValue === Tile) {
          countCorrectPositions++;
        } else {
          break;
        }
      }
    }
    return countCorrectPositions;
  }
}
