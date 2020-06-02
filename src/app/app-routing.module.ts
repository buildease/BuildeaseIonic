import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:'./index/index.module#IndexPageModule'
    // loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren:'./home/home.module#HomePageModule'
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
  exports: [RouterModule]
})
export class AppRoutingModule {}
