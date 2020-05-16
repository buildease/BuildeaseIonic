import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-sendotpemail',
  templateUrl: './sendotpemail.page.html',
  styleUrls: ['./sendotpemail.page.scss'],
})
export class SendotpemailPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['/resetpassword']);
  }
  myBackButton() {
    this.location.back();
  }
}
