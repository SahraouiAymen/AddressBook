import { Component } from '@angular/core';
import { FormBuilder , FormGroup , FormControl , Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm : FormGroup ;

  constructor( private fb : FormBuilder , private _user : UserService , private router: Router){
    let controls = {
      email : new FormControl ('', [
        Validators.required ,
        Validators.email , 
      ]),
      password : new FormControl('', [
        Validators.required ,
        Validators.minLength(6) , 
        Validators.maxLength(20)
      ])
    }
    this.loginForm = fb.group(controls)
  }

  login(){
    console.log(this.loginForm.value);

    this._user.loginToMyAccount(this.loginForm.value).subscribe({
      next : (res : any)=>{
         //this token is in  res.myToken 

        

        localStorage.setItem('token' , res.myToken);
         // etape 2 : redirecti lel next page  

          this.router.navigate(['/home']);
      },
      
      error : (err)=>{
        console.log(err);
        
      }
    })
    
  }

}
