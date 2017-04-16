import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: any = {address: {street: "", suite: "", zipcode: "", city: ""}, albums: []};
  showAlbum = false;

  constructor() { }

  ngOnInit() {
  }

}
