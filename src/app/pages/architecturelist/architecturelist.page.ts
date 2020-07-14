import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';
import { setIndex } from '@ionic-native/core/decorators/common';
import { Platform } from '@ionic/angular';
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-architecturelist',
  templateUrl: './architecturelist.page.html',
  styleUrls: ['./architecturelist.page.scss'],
})
export class ArchitecturelistPage implements OnInit {
  selectedSlide:any;
  @ViewChild('slides', { static: false }) slider: IonSlides;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  }

  images:string[]=[];
    constructor(private location: Location, private router: Router,) {
      this.images = [
        'assets/images/items/3.jpg',
        'assets/images/items/interior.jpg',
        'assets/images/items/architec.jpg',
        'assets/images/items/interior1.jpg',
        'assets/images/items/design.jpg',
        'assets/images/items/desing2.jpg',
        'assets/images/items/1.jpg',
        'assets/images/items/4.jpg'
      ];
   }

  ngOnInit() {
  }

  async segmentChanged(ev) {
      setTimeout(() => {
        this.selectedSlide.slideTo(this.segment, 500);
      }, 500);
  }
  async slideShanged(slides:IonSlides) {
     this.selectedSlide = slides;
     slides.getActiveIndex().then(selectedIndex =>{
       this.segment = selectedIndex;
     })
  }

  myBackButton() {
    this.router.navigate(['/home']);
  }
}
