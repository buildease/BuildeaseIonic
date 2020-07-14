import { Component, OnInit } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';
import { setIndex } from '@ionic-native/core/decorators/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  userdetails: any;
  architectureImg:string[]=[];
  constructionImg:string[]=[];
  interiordesignImg:string[]=[];
  constructor(private location: Location, private router: Router,
    private form: FormBuilder) { 
      this.architectureImg = [
        'assets/images/items/3.jpg',
        'assets/images/items/architec.jpg'
      ];

      this.constructionImg = [
        'assets/images/items/con1.jpg',
        'assets/images/items/con2.jpg'
      ]

      this.interiordesignImg = [
        'assets/images/items/5.jpg',
        'assets/images/items/interior.jpg'
      ]
    }

  ngOnInit() {
    this.userdetails = JSON.parse(localStorage.getItem('userData')).User;
  }
  architectureList(){
    this.router.navigate(['/architecturelist']);
  }
  constructionList(){
    this.router.navigate(['/constructionlist']);
  }
  interiordesignList(){
    this.router.navigate(['/interiordesignlist']);
  }
}
