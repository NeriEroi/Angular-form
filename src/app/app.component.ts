
import { Component } from '@angular/core';
import { UsersInParents } from './usersInParents.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usersInParent: UsersInParents[] = [
    new UsersInParents('Sergeij', 'Moscow'),
    new UsersInParents('Andy','New York'),
    new UsersInParents('Louis-Ferdinand','Paris')
  ];

  getUser($event) {
    this.usersInParent.push({name: $event.name, city: $event.city});
  };

  getRemoveUser($event) {
    this.usersInParent.splice($event, 1)
  };
}
