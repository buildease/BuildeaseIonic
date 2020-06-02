import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  consultation = true;
  interiordesign = true;
  construction = true;
  architecture = true;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.consultation, this.interiordesign, this.construction, this.architecture)
  }


  navigateToCompanyLogoPage(){
    this.router.navigate(['company-logo'])
  }
}
