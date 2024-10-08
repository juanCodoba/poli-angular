import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'main',loadChildren:() => import('./pages/main/main.module').then(m => m.MainModule)},
    {path:'login',loadChildren:() => import('./pages/login/login.module').then(m => m.LoginModule)},
    {path:'navbar',loadChildren:() => import('./pages/navbar/navbar.module').then(m => m.NavbarModule)},
    {path:'register',loadChildren:() => import('./pages/register/register.module').then(m => m.RegisterModule)},
    {path:'', redirectTo:'/main', pathMatch: 'full'}



];
