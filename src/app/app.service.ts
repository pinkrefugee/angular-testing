import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  quote;
  getQuote() {
    return this.quote;
  }
}
