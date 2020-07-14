import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-interiorform',
  templateUrl: './interiorform.page.html',
  styleUrls: ['./interiorform.page.scss'],
})
export class InteriorformPage implements OnInit {
  plannings: string[] = [];
  planningFor:any;
  name:any;
  email:any;
  number:any;
  area:any;
  length:any;
  breadth:any;
  additional:any;
  constructor(private location: Location, private router: Router, private getListService: GetListService,
    private form: FormBuilder, public toastController: ToastController) {
    this.plannings = [
      'Residential', 'Commercial', 'Others'
    ]
  }

  ngOnInit() {

  }
  categoryChanged(value) {
    this.planningFor = value['detail']['value']
    console.log(this.planningFor);
  }
  myBackButton() {
    this.location.back();
  }
  submitdata(formValue: any) {
    var appointmentdata = {
      name: formValue.name,
      email: formValue.email,
      number:formValue.number,
      planning:this.planningFor,
      area:formValue.area,
      length:formValue.length,
      breadth:formValue.breadth,
      requirements:formValue.additional,
    }
    this.getListService.interiorAppointment(appointmentdata).subscribe(
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
      message: 'Appointment Successfully sent!!.',
      duration: 2000,
      color:'success',
      position:'top'
    });
    toast.present();
  }
}
