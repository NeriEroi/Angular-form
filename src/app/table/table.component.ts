import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() users: any[] = [{name: "string", city: "string"}];
  @Output() user = new EventEmitter<number>();

  constructor() {
    
   }

  ngOnInit(): void {
  }

  removeUser(user) {
    this.user.emit(user);
  }
}
