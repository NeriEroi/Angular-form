
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usersInParent = [
    {name: 'Sergeij', city: 'Moscow'},
    {name: 'Andy', city: 'New York'},
    {name: 'Louis-Ferdinand', city: 'Paris'},
  ];

  getUser($event) {
    this.usersInParent.push({name: $event.name, city: $event.city});
  };
}
