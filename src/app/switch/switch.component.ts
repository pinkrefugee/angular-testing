import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  isOn = false;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `is ${this.isOn ? 'On' : 'Off'}`; }
  constructor() { }

  ngOnInit() {
  }

}
