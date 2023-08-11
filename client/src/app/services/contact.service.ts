import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = 'http://127.0.0.1:3000/contact/';

  constructor(private http : HttpClient ) {}
  create (contact : any){
    return this.http.post( this.url + 'add' , contact ) ;

  }

  getMyContact( id : any ){
    return this.http.get(this.url + 'getmycontact/' +  id)
  }

  getMyContactById( id : any ){
    return this.http.get(this.url + 'getbyid/' +  id)
  }

  delcontact(id : any ){
    return this.http.get(this.url + 'del/' +  id)
  }

  updatecontact(id : any , data : any ){
    return this.http.put ( this.url + 'edit/' +  id , data);
  }


}
