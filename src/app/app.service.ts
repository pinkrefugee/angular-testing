import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  number = 19;
  constructor() { }

  getCrazyNumber() {
    return this.number;
  }
}
