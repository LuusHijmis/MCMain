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
}
