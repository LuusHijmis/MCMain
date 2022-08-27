import { Component } from '@angular/core';
import {PuzzleService} from "./services/puzzle.service";
import {UtilityService} from "./services/utility.service";
import {ShuffleService} from "./services/shuffle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shuffleRounds: number = 10;
  numberOfRows: number = 4;
  numberOfColumns: number =4;
  puzzleSolved: boolean = false;

  constructor(
    private puzzleService: PuzzleService,
    private utilityService: UtilityService,
    private shuffleService: ShuffleService) {
  }

  clickTile(row: number, column: number) {
    this.puzzleService.swapTile(row, column);
    this.puzzleSolved = this.utilityService.numberOfCorrectPositions(this.numberOfRows, this.numberOfColumns) === 16;
  }

  newGame() {
    this.puzzleSolved = false;
    this.shuffleService.shuffle(this.shuffleRounds);
  }
}
