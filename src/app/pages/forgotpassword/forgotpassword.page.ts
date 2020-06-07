import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  authForm: FormGroup;
  one: any;
  two: any;
  three: any;
  four: any;
  constructor(private location: Location, private router: Router, private getListService: GetListService,
    private form: FormBuilder) { }

  ngOnInit() {
  }
  myBackButton() {
    this.location.back();
  }

  submitdata(formValue: any) {
    console.log(formValue)
    const otp = formValue.one + "" + formValue.two + "" + formValue.three + "" + formValue.four;
    console.log(otp)
    var registerOtp = {
      resetOtp: otp
    }

    this.getListService.otpPassword(registerOtp).subscribe(
      rdata => {
        this.router.navigate(['/resetpassword']);
      },
      error => {
        console.log("error is" + error)
      }
    )
  }

  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
}
