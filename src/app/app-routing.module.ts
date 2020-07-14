import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:'./index/index.module#IndexPageModule',
    canActivate: [AuthGuardService]
    // loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren:'./home/home.module#HomePageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'signup-otp',
    loadChildren: './pages/signup-otp/signup-otp.module#SignupOtpPageModule',
    canActivate: [AuthGuardService]
    // loadChildren: () => import('./pages/signup-otp/signup-otp.module').then( m => m.SignupOtpPageModule)
  },
  {
    path: 'architectureform',
    loadChildren:'./pages/architectureform/architectureform.module#ArchitectureformPageModule',
    canActivate: [AuthGuardService]
    // loadChildren: () => import('./pages/architectureform/architectureform.module').then( m => m.ArchitectureformPageModule)
  },
  {
    path: 'constructionform',
    loadChildren:'./pages/constructionform/constructionform.module#ConstructionformPageModule',
    canActivate: [AuthGuardService]
    // loadChildren: () => import('./pages/constructionform/constructionform.module').then( m => m.ConstructionformPageModule)
  },
  {
    path: 'interiorform',
    loadChildren:'./pages/interiorform/interiorform.module#InteriorformPageModule',
    canActivate: [AuthGuardService]
    // loadChildren: () => import('./pages/interiorform/interiorform.module').then( m => m.InteriorformPageModule)
  },
  {
    path: 'architecturelist',
    loadChildren:'./pages/architecturelist/architecturelist.module#ArchitecturelistPageModule',
    canActivate: [AuthGuardService]
    // loadChildren: () => import('./pages/architecturelist/architecturelist.module').then( m => m.ArchitecturelistPageModule)
  },
  {
    path: 'constructionlist',
    loadChildren:'./pages/constructionlist/constructionlist.module#ConstructionlistPageModule',
    canActivate: [AuthGuardService]
    // loadChildren: () => import('./pages/constructionlist/constructionlist.module').then( m => m.ConstructionlistPageModule)
  },
  {
    path: 'interiordesignlist',
    loadChildren:'./pages/interiordesignlist/interiordesignlist.module#InteriordesignlistPageModule',
    canActivate: [AuthGuardService]
    // loadChildren: () => import('./pages/interiordesignlist/interiordesignlist.module').then( m => m.InteriordesignlistPageModule)
  }

  // {
  //   path: 'company-logo',
  //   loadChildren: () => import('./pages/company-logo/company-logo.module').then( m => m.CompanyLogoPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    {
        provide: 'AuthGuardService',
        useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true
    }
],
})
export class AppRoutingModule {}
