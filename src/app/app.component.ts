import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  users = [];
  error = "";

  constructor (private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe(
				users => this.users = users,
				error => this.error = error);
  }
}
