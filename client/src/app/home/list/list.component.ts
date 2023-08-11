import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  list : any ; 
  userData : any ;

  constructor(private _contact : ContactService , private _user : UserService){}

  ngOnInit(){

    this.userData = this._user.getDataFromToken() ; 

    this._contact.getMyContact(this.userData._id).subscribe({
      next : (res)=>{
        this.list = res;
        console.log(this.list);
        
      },
      error : (error)=>{
        console.log(error);
        
      }
    })
  }

}
