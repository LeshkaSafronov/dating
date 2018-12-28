import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [
    new Photo('Svetlana', 'Safronova', 'https://pp.userapi.com/c627829/v627829897/4e24/tsD6xToB7pI.jpg', 'https://pp.userapi.com/c639827/v639827897/2ac87/w5r1xXu7djg.jpg', 3, 17, '14h'),
    new Photo('Svetlana', 'Safronova', 'https://pp.userapi.com/c627829/v627829897/4e24/tsD6xToB7pI.jpg', 'https://pp.userapi.com/c837138/v837138019/671b5/ncwgPvWCCKQ.jpg', 0, 2, '14h'),
    new Photo('Марина', 'Сманцер', 'https://pp.userapi.com/c845221/v845221925/97e8c/yTcggBsJU1g.jpg', 'https://pp.userapi.com/c840721/v840721362/80647/owqgfyveEbk.jpg', 0, 10, '14h'),
    new Photo('Alexey', 'Safronov', 'https://pp.userapi.com/c626325/v626325794/1e3e6/sItGU2UGOKU.jpg', 'https://pp.userapi.com/c626517/v626517794/23ee9/3vtYdmeYeRU.jpg', 0, 20, '21h'),
    new Photo('Женя', 'Гусаковская', 'https://pp.userapi.com/c630724/v630724827/3ef15/gycKaQ24uEo.jpg', 'https://pp.userapi.com/c627925/v627925827/2cd5f/ePoB3eeM98g.jpg', 1, 15, '2h'),
    new Photo('Женя', 'Гусаковская', 'https://pp.userapi.com/c630724/v630724827/3ef15/gycKaQ24uEo.jpg', 'https://pp.userapi.com/c630724/v630724827/3ef15/gycKaQ24uEo.jpg', 1, 4, '2h'),
  ];

  constructor() { }

  ngOnInit() {
  }

  addLike(photo: Photo) {
    photo.likes += 1;
  }

}
