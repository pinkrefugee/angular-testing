import { AppService } from './app.service';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  quote;
  constructor(private appService: AppService){};
  ngOnInit() {
    this.quote = this.appService.getQuote();
  }
}
