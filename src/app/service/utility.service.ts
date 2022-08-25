import { Injectable } from '@angular/core';

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
        const Tile = document.getElementById("cell" + i + j)?.className;
        const checkValue = "tile" + tileCount;
        tileCount = tileCount + 1;
        if (checkValue === Tile) {
          countCorrectPositions = countCorrectPositions + 1;
        } else {
          break;
        }
      }
    }
    return countCorrectPositions;
  }
}
