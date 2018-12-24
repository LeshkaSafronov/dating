import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, ViewChild} from '@angular/core';
import {Masonry, MasonryInstance, MasonryOptions} from '@thisissoon/angular-masonry';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements AfterViewInit, OnDestroy {

  @ViewChild('grid') public grid: ElementRef;

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
    console.log(this.masonryInstance);

  }

  layout() {
    this.masonryInstance.layout();
  }

  ngOnDestroy() {
    this.masonryInstance.destroy();
  }

}
