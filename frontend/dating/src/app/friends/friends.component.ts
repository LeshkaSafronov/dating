import { Component, OnInit } from '@angular/core';
import {Friend} from '../friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = [
    new Friend('Alexey', 'Safronov', 'https://pp.userapi.com/c626325/v626325794/1e3e6/sItGU2UGOKU.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteFriend(friend: Friend) {
    this.friends = [];
  }
}
