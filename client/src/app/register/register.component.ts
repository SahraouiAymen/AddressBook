import { Component } from '@angular/core';
import { FormBuilder , FormGroup , FormControl , Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm : FormGroup ;
  constructor(private fb : FormBuilder , private _user : UserService , private router : Router){

    let controls ={
      name : new FormControl( '' , [
        Validators.required ,
      ] ),

      lastname : new FormControl( '' , [
        Validators.required ,
      ] ),

      email : new FormControl( '' , [
        Validators.required ,
        Validators.email
      ] ),

      password : new FormControl( '', [
        Validators.required ,
        Validators.minLength(6),
        Validators.maxLength(20)
      ] ),
    }
    this.registerForm = fb.group(controls);
  }


  register(){

    console.log( this.registerForm.value );

    this._user.createAccount( this.registerForm.value ).subscribe({
      next : (res)=> {
        this.router.navigate(['/login']);
      },
      error : (err)=>{
        console.log(err);
        
      }
    })
  }

}
