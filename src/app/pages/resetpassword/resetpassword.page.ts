import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  authForm: FormGroup;
  password:any;
  constructor(private location: Location, private router: Router, private getListService: GetListService,
    private form: FormBuilder,public toastController: ToastController) {

  }

  ngOnInit() {
  }
  myBackButton() {
    this.location.back();
  }

  submitdata(formValue: any){
    var newpassword = {
      email: JSON.parse(localStorage.getItem('UserEmail')),
      newPass: formValue.password
    }

    this.getListService.resetPassword(newpassword).subscribe(
      rdata => {
        this.successToast();
        this.router.navigate(['/login']);
      },
      error => {
        this.errorToast();
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
      message: 'Password reset successful!.',
      duration: 2000,
      color:'success',
      position:'middle'
    });
    toast.present();
  }
}
