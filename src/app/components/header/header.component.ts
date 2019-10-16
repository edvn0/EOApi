import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  loggedIn: boolean;

  constructor() { }

  ngOnInit() {
    this.loggedIn = false;
  }

}
