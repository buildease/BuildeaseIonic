import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { GetListService } from '../../services/get-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ModalController, Platform, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  userdetails: any;

  constructor(private location: Location, private router: Router, private getListService: GetListService,
    private form: FormBuilder, public toastController: ToastController, public modalCtrl: ModalController) { }

  ngOnInit() {
     this.userdetails = JSON.parse(localStorage.getItem('userData')).User;
    console.log(this.userdetails);
  }
  async successToast() {
    const toast = await this.toastController.create({
      message: "You've successfully logged out!!",
      duration: 2000,
      color:'success',
      position:'top'
    });
    toast.present();
  }

  logout() {
    this.successToast();
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

  
}
