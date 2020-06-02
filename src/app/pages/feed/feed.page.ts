import { Component, OnInit } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';
import { setIndex } from '@ionic-native/core/decorators/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  // selectedSlide:any;
  // segment = 0;
  // sliderOptions = {
  //   initialSlide: 0,
  //   slidesPerView: 1,
  //   speed: 400
  // }
  constructor() { }

  ngOnInit() {
  }
  // async segmentChanged(ev) {
  //     await this.selectedSlide.slideTo(this.segment);
  // }
  // async slideShanged(slides:IonSlides) {
  //    this.selectedSlide = slides;
  //    slides.getActiveIndex().then(selectedIndex =>{
  //      this.segment = selectedIndex;
  //    })
  // }
}
