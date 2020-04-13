import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() user;
  @Output() selected = new EventEmitter<any>();
  click() { 
    this.selected.emit(this.user);
  }
  constructor() { }

  ngOnInit() {
  }

}
