import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  users = [{name: 'Sam', id: 1}, {name: 'Phil', id: 2}];
  gotoDetail() {};
}
