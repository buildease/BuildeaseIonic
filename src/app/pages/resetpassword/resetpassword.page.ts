import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  authForm: FormGroup;
  password:any;
  constructor(private location: Location, private router: Router, private getListService: GetListService,
    private form: FormBuilder) {

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
        // console.log(rdata, "rdata")
        this.router.navigate(['/login']);
      },
      error => {
        console.log("error is" + error)
      }
    )
  }
}
