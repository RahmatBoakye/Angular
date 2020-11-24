import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, AfterContentInit {
  @Input() delay: number = 500;
  @ContentChildren(CarouselItemComponent) carouselItemsList: QueryList<
    CarouselItemComponent
  >;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.showNextCarouselItem();
  }

  //trigger show or hide a carousel-image
  showNextCarouselItem() {
    let carouselItems = this.carouselItemsList.toArray();
    let count: number = 0;
    let max: number = carouselItems.length;

    setInterval(() => {
      console.log('Delayed has been called!!!');
      carouselItems.forEach((carouselItem) => (carouselItem.isHidden = true));

      //however we need to show the next carouselItem
      //NB: 0%3 = 0, 1%3 = 1, 2%3 = 2, 3%3 = 0, 4%3=1, 5%3=2, 6%3=0 etc
      let index = count % max;
      carouselItems[index].isHidden = false;

      //increase the count so it moves to the next item index in the array the next time this method is called after this.delay milliseconds
      count++;
    }, this.delay);
  } 
}
