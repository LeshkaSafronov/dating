import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, ViewChild} from '@angular/core';
import {Masonry, MasonryInstance, MasonryOptions} from '@thisissoon/angular-masonry';
import {People} from '../people';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements AfterViewInit, OnDestroy {

  @ViewChild('grid') public grid: ElementRef;

  people: People[] = [
    new People('Женя', 'Гусаковская', 'I love Alexey Safronov', null, 'Joined in 2013', 75, 'https://pp.userapi.com/c630724/v630724827/3ef15/gycKaQ24uEo.jpg'),
    new People('Alexey', 'Safronov', 'I love Женя Гусаковская', 'FRIEND', 'Joined in 2013', 266, 'https://pp.userapi.com/c626325/v626325794/1e3e6/sItGU2UGOKU.jpg'),
    new People('Svetlana', 'Safronova', 'Waiting for love', 'WAIT', 'Joined in 2016', 122, 'https://pp.userapi.com/c627829/v627829897/4e24/tsD6xToB7pI.jpg'),
    new People('Дима', 'Еленский', '...', null, 'Joined in 2016', 145, 'https://pp.userapi.com/c850532/v850532106/244a2/Kr0hcIXnZCY.jpg'),
    new People('Марина', 'Сманцер', 'басхелор', null, 'Joined in 2016', 300, 'https://pp.userapi.com/c845221/v845221925/97e8c/yTcggBsJU1g.jpg'),
    new People('Viktoriya', 'Gusakovskaya', '¯\\_(ツ)_/¯', null, 'Joined in 2016', 300, 'https://pp.userapi.com/c840437/v840437736/3e286/RcWIn0R_9AM.jpg'),
  ];

  public masonryInstance: MasonryInstance;


  constructor(@Inject(Masonry) public masonry) { }

  ngAfterViewInit() {
    const options: MasonryOptions = {
      itemSelector: '.grid-card',
      columnWidth: 20,
      gutter: 20,
      fitWidth: true
    };
    this.masonryInstance = new this.masonry(this.grid.nativeElement, options);
  }

  layout() {
    this.masonryInstance.layout();
  }

  ngOnDestroy() {
    this.masonryInstance.destroy();
  }

  addFriend(men: People) {
    men.connection = 'WAIT';
  }

  cancelFriend(men: People) {
    men.connection = null;
  }

}
