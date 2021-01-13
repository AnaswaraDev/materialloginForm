import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import {MaterialModule} from './material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgbModule,
    MaterialModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
