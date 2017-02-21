/**
 * Created by User on 2.2.2017 г..
 */
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ CommonModule, FormsModule, HttpModule ],
  // It is a must to export component dus make it visible
  exports: [ HomeComponent ]
})
export class HomeModule { }

