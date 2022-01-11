import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersInParents } from '../usersInParents.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() users: UsersInParents[] = [];
  @Output() user = new EventEmitter<any>();

  constructor() {
    
   }

  ngOnInit(): void {
  }

  removeUser(user: any) {
    this.user.emit(user);
  }
}
