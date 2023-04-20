import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrers-box',
  templateUrl: './carrers-box.component.html',
  styleUrls: ['./carrers-box.component.css']
})
export class CarrersBoxComponent {
  @Input()  contact:any;

}
