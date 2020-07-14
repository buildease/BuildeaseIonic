import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sendotpemail',
  templateUrl: './sendotpemail.page.html',
  styleUrls: ['./sendotpemail.page.scss'],
})
export class SendotpemailPage implements OnInit {
  authForm: FormGroup;
  email: any;
  constructor(private location: Location, private router: Router, private getListService: GetListService,
    private form: FormBuilder,public toastController: ToastController) {

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
        this.successToast();
        this.router.navigate(['/forgotpassword']);
      },
      error => {
        this.errorToast();
        console.log("error is" + error)
      }
    )
  }


  myBackButton() {
    this.location.back();
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
