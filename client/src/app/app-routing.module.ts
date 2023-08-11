import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authenticationGuard } from './services/authentication.guard';
import { AddComponent } from './home/add/add.component';
import { ListComponent } from './home/list/list.component';

const routes: Routes = [
  { path : '' , redirectTo : 'list' , pathMatch: 'full'},
  { path : 'home' , canActivate : [ authenticationGuard ]  , component : HomeComponent , children : [
    { path : '' , redirectTo : 'list', pathMatch: 'full'},
    { path : 'add' , component : AddComponent } ,
    { path : 'list' , component :ListComponent}
  ] },
  { path : 'login' , component : LoginComponent},
  { path : 'register',component: RegisterComponent},
  { path : '**' , component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
