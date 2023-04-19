import { Component } from '@angular/core';
import {datafields}  from './appdata/info'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day8';

  dataitems=datafields


}
