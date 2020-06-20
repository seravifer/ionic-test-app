import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ionic',
    pathMatch: 'full'
  },
  {
    path: 'ionic',
    loadChildren: () => import('./pages/ionic/ionic.module').then(m => m.IonicPageModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./pages/material/material.module').then(m => m.MaterialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
