import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { from } from 'rxjs';
import { trigger, state, transition, keyframes, animate, style } from '@angular/animations';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        animate('600ms ease-in', keyframes([
          style({ opacity: 0, transform: 'translateY(-70px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ]),

    trigger('fadeUp', [
      transition('void => *', [
        animate('900ms ease-in', keyframes([
          style({ opacity: 0, transform: 'translateY(70px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ]),

  ]
})
export class LoginPage implements OnInit {
  authForm: FormGroup;
  email:any;
  password:any;
  constructor(private location: Location, private router: Router,
    private getListService: GetListService, private form: FormBuilder,public toastController: ToastController) {

  }

  ngOnInit() {
  }

  submitdata(formValue: any) {
    console.log(formValue);
    var logindata = {
      email: formValue.email,
      password: formValue.password
    }

    this.getListService.Login(logindata).subscribe(
      rdata => {
        localStorage.setItem('userData', JSON.stringify(rdata));
        if(rdata.Success === true){
          this.successToast();
          this.router.navigate(['/home']);
        }
      },
      error => {
        this.errorToast();
        console.log("error is" + error)
      }
    )
  }
  
  signUp() {
    this.router.navigate(['/signup']);
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
      message: 'Login Successful!.',
      duration: 2000,
      color:'success',
      position:'top'
    });
    toast.present();
  }
}
