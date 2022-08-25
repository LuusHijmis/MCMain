import { Injectable } from '@angular/core';
import {UtilityService} from "./utility.service";


@Injectable({
  providedIn: 'root'
})
export class ShuffleService {

  constructor(private  utilityService: UtilityService) { }

  shuffle(shuffleRounds: number) {
    for (let i = 0; i <   shuffleRounds; i++) {
      const row1 = this.utilityService.randomizer();
      const row2 = this.utilityService.randomizer();
      const column1 = this.utilityService.randomizer();
      const column2 = this.utilityService.randomizer();

      const temp1 = document.getElementById("cell"+row1+column1)?.className;
      const temp2 = document.getElementById("cell"+row2+column2)?.className;
      if(temp2) document.getElementById("cell"+row1+column1)!.className = temp2;
      if(temp1) document.getElementById("cell"+row2+column2)!.className = temp1;
    }
    this.setWhiteTileAtBottomRight();
  }

  setWhiteTileAtBottomRight() {
    const classnameTileBottomRight = document.getElementById("cell44")!.className;
    const idTile16 = document.getElementsByClassName("tile16")!.item(0)!.id;
    const classNameWhiteTile = document.getElementById(idTile16)!.className;
    if(classNameWhiteTile) document.getElementById("cell44")!.className = classNameWhiteTile;
    if(classnameTileBottomRight) document.getElementById(idTile16)!.className = classnameTileBottomRight;
  }

}
