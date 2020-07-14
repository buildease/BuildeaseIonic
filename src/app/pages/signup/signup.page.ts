import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  authForm: FormGroup;
  name: any;
  email: any;
  contact: any;
  password: any;
  confirmPassword: any;
  constructor(private router: Router, private getListService: GetListService,
    private form: FormBuilder,public toastController: ToastController) {
  }

  ngOnInit() { }
  submitdata(formValue: any) {
    var signUpData = {
      "name": formValue.name,
      "email": formValue.email,
      "number": formValue.contact,
      "password": formValue.password,
      "confirmPassword": formValue.confirmPassword
    }
    console.log(signUpData)

    this.getListService.Register(signUpData).subscribe(
      rdata => {
        console.log(rdata, "rdata")
        this.successToast();
        this.router.navigate(['/signup-otp']);
      },
      error => {
        this.errorToast()
        console.log("error is" + error)
      }
    )
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
      message: 'Check your email for the OTP!!.',
      duration: 2000,
      color:'success',
      position:'middle'
    });
    toast.present();
  }

}
