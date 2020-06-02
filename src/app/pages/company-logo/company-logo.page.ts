import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.page.html',
  styleUrls: ['./company-logo.page.scss'],
})
export class CompanyLogoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateToLoginPage(){
    this.router.navigate(['login'])
  }
}
