import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeNumber: number;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.welcomeNumber = this.appService.getCrazyNumber();
  }

}
