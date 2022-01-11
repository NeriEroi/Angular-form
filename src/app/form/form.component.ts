import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() user = new EventEmitter<{name: "string", city: "string"}>();

  constructor() { }

  ngOnInit(): void {
  }

  addUser(name: any, city: any) {
    if (name && city != '')
    this.user.emit(
      {name: name[0].toUpperCase() + name.slice(1).toLowerCase(), city: city[0].toUpperCase() + city.slice(1).toLowerCase()}
    );
  }
}
