import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlistComponent } from './slist/slist.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SlistComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SlistComponent]
})
export class SmoduleModule { }
