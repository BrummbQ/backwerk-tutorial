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
  albums = [];
  error = "";

  constructor (private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums()
      .subscribe(
				albums => this.loadUsers(albums),
				error => this.error = error);
  }

  loadUsers(albums) {
    this.dataService.getUsers()
      .subscribe(
				users => {
          // assign personal albums to each user
          users.forEach(user => {
            const albumsForUser = albums.filter(album => album.userId == user.id);
            user.albums = albumsForUser;
          })
          this.users = users
        },
				error => this.error = error);
  }
}
