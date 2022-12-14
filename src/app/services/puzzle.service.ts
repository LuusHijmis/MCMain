import {Injectable} from "@angular/core";
import {StringEnum} from "../string.enum";

@Injectable({
  providedIn: 'root',
  })

export class PuzzleService {

  constructor() {
  }

  swapTile(row: number, column: number) {

    if (this.checkIfWhiteTileIsLeft(row, column)) {
      this.swapTilesLeft(row, column);
    } else if (this.checkIfWhiteTileIsRight(row, column)) {
      this.swapTilesRight(row, column);
    } else if (this.checkIfWhiteTileIsAbove(row, column)) {
      this.swapTileUp(row, column);
    } else if (this.checkIfWhiteTileIsUnderNeath(row, column)) {
      this.swapTileDown(row, column);
    } else {}
  }

  checkIfWhiteTileIsLeft(row: number, column: number): boolean {
    if(column !== 1) {
      return this.getClassNameTile(row, column-1) === StringEnum.tile16;
    }
    return false;
  }

  checkIfWhiteTileIsRight(row: number, column: number): boolean {
    if(column !==4) {
      return this.getClassNameTile(row, column+1) === StringEnum.tile16;
    }
    return false;
  }

  checkIfWhiteTileIsAbove(row: number, column: number): boolean {
    if(row !==1) {
      return this.getClassNameTile(row-1, column) === StringEnum.tile16;
    }
    return false;
  }

  checkIfWhiteTileIsUnderNeath(row: number, column: number): boolean {
    if(row !==4) {
      return this.getClassNameTile(row+1, column) === StringEnum.tile16;
    }
    return false;
  }


  getClassNameTile(row: number, column: number): string | undefined {
    const cell = document.getElementById(StringEnum.cell+row+column);
    const cellName = cell?.className;
    return cellName;
  }

  swapTilesLeft(row: number, column: number) {
    const temp1 = document.getElementById(StringEnum.cell+row+column)?.className;
    const temp2 = document.getElementById(StringEnum.cell+row+(column-1))?.className;
    if(temp2) document.getElementById(StringEnum.cell+row+column)!.className = temp2;
    if(temp1) document.getElementById(StringEnum.cell+row+(column-1))!.className = temp1;
  }

  swapTilesRight(row: number, column: number) {
    const temp1 = document.getElementById(StringEnum.cell+row+column)?.className;
    const temp2 = document.getElementById(StringEnum.cell+row+(column+1))?.className;
    if(temp2) document.getElementById(StringEnum.cell+row+column)!.className = temp2;
    if(temp1) document.getElementById(StringEnum.cell+row+(column+1))!.className = temp1;
  }
  swapTileUp(row: number, column: number) {
    const temp1 = document.getElementById(StringEnum.cell+row+column)?.className;
    const temp2 = document.getElementById(StringEnum.cell+(row-1)+column)?.className;
    if(temp2) document.getElementById(StringEnum.cell+row+column)!.className = temp2;
    if(temp1) document.getElementById(StringEnum.cell+(row-1)+column)!.className = temp1;
  }

  swapTileDown(row: number, column: number) {
    const temp1 = document.getElementById(StringEnum.cell+row+column)?.className;
    const temp2 = document.getElementById(StringEnum.cell+(row+1)+column)?.className;
    if(temp2) document.getElementById(StringEnum.cell+row+column)!.className = temp2;
    if(temp1) document.getElementById(StringEnum.cell+(row+1)+column)!.className = temp1;
  }

}
