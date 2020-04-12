import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  value = 1;

  increment() {
    setTimeout(() => {
      this.value += 1;
    }, 5000);
  }
}
