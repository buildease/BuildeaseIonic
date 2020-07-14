import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, transition, keyframes, animate, style } from '@angular/animations';
@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.page.html',
  styleUrls: ['./company-logo.page.scss'],
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
export class CompanyLogoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateToLoginPage(){
    this.router.navigate(['login'])
  }
}
