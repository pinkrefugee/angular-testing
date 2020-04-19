import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  constructor(private router: Router) {}
  gotoChild() {
    const url = '/child';
    this.router.navigateByUrl(url);
  }
}
