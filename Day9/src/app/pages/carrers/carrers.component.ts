import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.css']
})
export class CarrersComponent {
  contactlist:any;
        constructor(private cs:ContactService){

          this.cs.getContacts().subscribe(
             {
               next: (data:any)=>this.contactlist = data,
               error: ()=> this.contactlist = []
             }
          )
        }

}
