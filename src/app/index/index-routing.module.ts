import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth/auth-guard.service';
import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[
      {
        path:'',
        loadChildren:'../pages/welcome/welcome.module#WelcomePageModule'
      },
      {
        path:'login',
        loadChildren:'../pages/login/login.module#LoginPageModule'
      },
      {
        path:'signup',
        loadChildren:'../pages/signup/signup.module#SignupPageModule'
      },
      {
        path:'signup-otp',
        loadChildren:'../pages/signup-otp/signup-otp.module#SignupOtpPageModule'
      },
      {
        path:'forgotpassword',
        loadChildren:'../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule'
      },
      {
        path:'resetpassword',
        loadChildren:'../pages/resetpassword/resetpassword.module#ResetpasswordPageModule'
      },
      {
        path:'sendotpemail',
        loadChildren:'../pages/sendotpemail/sendotpemail.module#SendotpemailPageModule'
      },
      {
        path:'company-logo',
        loadChildren:'../pages/company-logo/company-logo.module#CompanyLogoPageModule'
      },
      {
        path:'architectureform',
        loadChildren:'../pages/architectureform/architectureform.module#ArchitectureformPageModule'
      },
      {
        path:'constructionform',
        loadChildren:'../pages/constructionform/constructionform.module#ConstructionformPageModule'
      },
      {
        path:'interiorform',
        loadChildren:'../pages/interiorform/interiorform.module#InteriorformPageModule'
      },
      {
        path:'architecturelist',
        loadChildren:'../pages/architecturelist/architecturelist.module#ArchitecturelistPageModule'
      },
      {
        path:'constructionlist',
        loadChildren:'../pages/constructionlist/constructionlist.module#ConstructionlistPageModule'
      },
      {
        path:'interiordesignlist',
        loadChildren:'../pages/interiordesignlist/interiordesignlist.module#InteriordesignlistPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
