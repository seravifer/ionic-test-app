import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicPageRoutingModule } from './ionic-routing.module';
import { IonicPage } from './ionic.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [IonicPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicPageRoutingModule,
    SharedModule
  ]
})
export class IonicPageModule { }
