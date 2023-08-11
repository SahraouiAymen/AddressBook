import { Component } from '@angular/core';
import {FormBuilder , FormControl , FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  ContactForm : FormGroup ;
  userData : any ;

  constructor(private fb : FormBuilder , private _user : UserService , private _contact : ContactService , private _router : Router){

    let controls = {
      name : new FormControl('' , [
        Validators.required,
        Validators.minLength(4)
      ]),
      lastname : new FormControl('' , [
        Validators.required,
        Validators.minLength(4)
      ]),
      email : new FormControl('' , [
        Validators.required,
        Validators.email
      ]),
      tel : new FormControl('' , [
        Validators.required,
        Validators.maxLength(8)
        
      ]),
      address : new FormControl('' , [
        Validators.required
      ])
    }

    this.ContactForm = fb.group( controls );
  }
  
  ngOnInit(){
    this.userData = this._user.getDataFromToken();
  
  }

  ajout(){
    let contact = this.ContactForm.value ; 
    contact.idUser = this.userData._id;
    
    this._contact.create( contact ).subscribe({
      next : ()=>{
        this._router.navigate(['home/list']);
      },
      error : (err)=>{
        console.log(err);
        
      }
    })
  }

}
