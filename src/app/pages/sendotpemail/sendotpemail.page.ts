import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";

@Component({
  selector: 'app-sendotpemail',
  templateUrl: './sendotpemail.page.html',
  styleUrls: ['./sendotpemail.page.scss'],
})
export class SendotpemailPage implements OnInit {
  authForm: FormGroup;
  email: any;
  constructor(private location: Location, private router: Router, private getListService: GetListService,
    private form: FormBuilder) {

  }

  ngOnInit() {
  }

  submitdata(formValue: any) {
    console.log(formValue)
    localStorage.setItem('UserEmail', JSON.stringify(formValue.email));
    var registeremail = {
      email: formValue.email
    }

    this.getListService.forgotPassword(registeremail).subscribe(
      rdata => {
        // console.log(rdata, "rdata")
        this.router.navigate(['/forgotpassword']);
      },
      error => {
        console.log("error is" + error)
      }
    )
  }


  myBackButton() {
    this.location.back();
  }
}
