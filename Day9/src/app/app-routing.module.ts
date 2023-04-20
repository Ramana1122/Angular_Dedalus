import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { HomeComponent } from './pages/home/home.component';
import { ReachusComponent } from './pages/reachus/reachus.component';

const routes: Routes = [
    {path:"",component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path: "careers",component:CarrersComponent},
    {path: "reachus", component:ReachusComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }