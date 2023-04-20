import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-box',
  templateUrl: './about-box.component.html',
  styleUrls: ['./about-box.component.css']
})
export class AboutBoxComponent {
  @Input() feedbacks:any;

}
