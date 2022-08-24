import { Component } from '@angular/core';
import {PuzzleService} from "./puzzle.service";
import {UtilityService} from "./utility.service";
import {ShuffleService} from "./shuffle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MCMain';
  shuffleRounds: number = 10;
  numberOfRows: number = 4;
  numberOfColumns: number =4;
  puzzleSolved: boolean = false;

  constructor(private puzzleService: PuzzleService, private utilityService: UtilityService, private shuffleService: ShuffleService ) {
  }

  clickTile(row: number, column: number) {
    this.puzzleService.swapTile(row, column);
    this.puzzleSolved = this.numberOfCorrectPositions() === 16;
  }

  randomizer(): number {
    const getal = 1+ (Math.random()*3);
    return Math.round(getal);
  }

  newGame() {
    this.puzzleSolved = false;
    this.shuffleService.shuffle(this.shuffleRounds);
  }
  //
  // shuffle() {
  //   for (let i = 0; i < this.shuffleRounds; i++) {
  //     const row1 = this.utilityService.randomizer();
  //     const row2 = this.utilityService.randomizer();
  //     const column1 = this.utilityService.randomizer();
  //     const column2 = this.utilityService.randomizer();
  //
  //     const temp1 = document.getElementById("cell"+row1+column1)?.className;
  //     const temp2 = document.getElementById("cell"+row2+column2)?.className;
  //     if(temp2) document.getElementById("cell"+row1+column1)!.className = temp2;
  //     if(temp1) document.getElementById("cell"+row2+column2)!.className = temp1;
  //   }
  //   this.setWhiteTileAtBottomRight();
  // }
  //
  // setWhiteTileAtBottomRight() {
  //   const classnameTileBottomRight = document.getElementById("cell44")!.className;
  //   const idTile16 = document.getElementsByClassName("tile16")!.item(0)!.id;
  //   const classNameWhiteTile = document.getElementById(idTile16)!.className;
  //   if(classNameWhiteTile) document.getElementById("cell44")!.className = classNameWhiteTile;
  //   if(classnameTileBottomRight) document.getElementById(idTile16)!.className = classnameTileBottomRight;
  // }

  numberOfCorrectPositions(): number {
    let count: number = 1;
    let countCorrectPositions: number = 0;
    for (let i = 1; i < this.numberOfRows +1; i++) {
      for (let j = 1; j < this.numberOfColumns + 1; j++) {
        const Tile = document.getElementById("cell" + i + j)?.className;
        const checkValue = "tile" + count;
        count = count + 1;
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
