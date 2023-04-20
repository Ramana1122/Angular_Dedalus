import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { ReachusComponent } from './pages/reachus/reachus.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrersBoxComponent } from './pages/carrers/carrers-box/carrers-box.component';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { AboutBoxComponent } from './pages/about/about-box/about-box.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    CarrersComponent,
    ReachusComponent,
    CarrersBoxComponent,
    ServiceBoxComponent,
    AboutBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
