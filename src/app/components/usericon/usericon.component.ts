import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/models/user';

@Component({
  selector: 'app-usericon',
  templateUrl: './usericon.component.html',
  styleUrls: ['./usericon.component.scss']
})
export class UserIconComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
