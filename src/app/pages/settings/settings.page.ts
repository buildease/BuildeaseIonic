import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private location: Location, private router: Router, private getListService: GetListService) { }

  ngOnInit() {
    // this.getConstructionList()
  }

  // getConstructionList() {
  //   var Obj = ""
  //   this.getListService.getConstruction(Obj).subscribe(
  //     rdata => {
  //       console.log("hhhhhhhhhhhhhhhhhhhhhhhhh")
  //       if (rdata) {
  //         console.log(rdata)
  //         // this.CoursecategoryList = rdata.data
  //         // console.log(this.CoursecategoryList);
  //         // this.IsDisplayCourses = false;
  //         // this.IsDisplayCourseCategories = true;

  //       }
  //       else {
  //         // this.cacheService.displaySpinner = false;
  //         alert(rdata)
  //       }
  //     },
  //     error => {
  //       // this.cacheService.displaySpinner = false;
  //     }
  //   )
  // }
  myBackButton(){
    this.router.navigate(['/home/feed']);
  }
  constructionForm(){
    this.router.navigate(['/constructionform']);
  }

  architectureForm(){
    this.router.navigate(['/architectureform']);
  }

  interiorDesign(){
    this.router.navigate(['/interiorform']);
  }
}
