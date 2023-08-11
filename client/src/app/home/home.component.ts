import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userData : any ;

  constructor(private _user : UserService){
    
  }
  
  ngOnInit(){

    this.userData = this._user.getDataFromToken();
  }

  logout(){

    localStorage.removeItem('token');
    window.location.reload();

  }
}
