import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { ToastController } from '@ionic/angular';

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
    private form: FormBuilder,public toastController: ToastController) { }

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
        this.successToast();
        this.router.navigate(['/resetpassword']);
      },
      error => {
        this.errorToast();
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

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Something went wrong!!.',
      duration: 2000,
      color:'warning',
      position:'middle'
    });
    toast.present();
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Reset your password!!.',
      duration: 2000,
      color:'success',
      position:'middle'
    });
    toast.present();
  }
}
