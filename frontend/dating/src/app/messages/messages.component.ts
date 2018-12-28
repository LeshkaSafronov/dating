import { Component, OnInit } from '@angular/core';
import {Message} from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[] = [
    new Message(1, 'Alexey', 'Safronov', 'https://pp.userapi.com/c626325/v626325794/1e3e6/sItGU2UGOKU.jpg', 'Today at 5:42PM', 'Hello!')
  //   new Message(2, 'Svetlana', 'Safronova', 'https://pp.userapi.com/c846520/v846520895/6c40e/Q9wAYhoiKXE.jpg?ava=1', 'Yesterday at 12:30AM', 'Good bye'),
  //   new Message(3, 'Марина', 'Сманцер', 'https://pp.userapi.com/c845221/v845221925/97e8c/yTcggBsJU1g.jpg', '5 days ago', 'Dude, this is awesome. Thanks so much')
  // ];
    ];
  constructor() { }

  ngOnInit() {
  }

}
