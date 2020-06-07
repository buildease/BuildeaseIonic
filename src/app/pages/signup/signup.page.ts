import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  password2: any;
  constructor(private router: Router, private getListService: GetListService,
    private form: FormBuilder) {
  }

  ngOnInit() { }
  submitdata(formValue: any) {
    var signUpData = {
      "name": formValue.name,
      "email": formValue.email,
      "number": formValue.contact,
      "password": formValue.password,
      "password2": formValue.password2
    }
    console.log(signUpData)

    this.getListService.Register(signUpData).subscribe(
      rdata => {
        console.log(rdata, "rdata")
        this.router.navigate(['/signup-otp']);
      },
      error => {
        console.log("error is" + error)
      }
    )
  }

}
