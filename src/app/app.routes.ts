import { Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:"login",loadComponent:()=>import("./components/login/login.component").then(com=>com.LoginComponent)},
    {path:"signup",loadComponent:()=>import("./components/signup/signup.component").then(com=>com.SignupComponent)},
    {path:"",redirectTo:"/login",pathMatch:"full"},
    {path:"**",component:NotfoundComponent}
];
