import { Component } from '@angular/core';
import { FeedbacksService } from 'src/app/services/feedbacks.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  feedbackslist:any;
  constructor(private rs:FeedbacksService){
    this.rs.getServices().subscribe(
      {
        next:(data:any)=> this.feedbackslist=data,
        error:()=>this.feedbackslist=[]
      }
    )
  }
}
