import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { trigger, state, transition, keyframes, animate, style } from '@angular/animations';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['/home']);
  }
  signUp() {
    this.router.navigate(['/signup']);
  }
}
