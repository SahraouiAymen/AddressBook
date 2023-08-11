import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://127.0.0.1:3000/user/"
  constructor(private http : HttpClient) { }


  createAccount( user : any){

    return this.http.post(this.url + 'register' , user)

  }


  loginToMyAccount(user : any){

    return this.http.post(this.url + 'login' , user )

  }

    getDataFromToken(){

      let token = localStorage.getItem('token');

      if (token) {
      //   let CodedData = token.split('.')[1];
      //   let DecodedData = window.atob( CodedData );
      //   let data = JSON.parse(DecodedData);
         
      //   return data ;

      return JSON.parse(window.atob(token.split('.')[1]))
      }
    }
}
