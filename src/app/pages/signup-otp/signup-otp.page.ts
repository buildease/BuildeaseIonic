import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";

@Component({
  selector: 'app-signup-otp',
  templateUrl: './signup-otp.page.html',
  styleUrls: ['./signup-otp.page.scss'],
})
export class SignupOtpPage implements OnInit {
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

  submitdata(formValue: any) {
    const otp = formValue.one +""+ formValue.two +""+ formValue.three +""+ formValue.four;
    console.log(otp)
    var registerOtp = {
      resetOtp: otp
    }

    this.getListService.RegisterOtp(registerOtp).subscribe(
      rdata => {
        console.log(rdata, "rdata")
        this.router.navigate(['/home']);
      },
      error => {
        console.log("error is" + error)
      }
    )

  }
}
