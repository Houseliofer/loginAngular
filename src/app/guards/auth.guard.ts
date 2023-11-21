import { Inject, Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({ 
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private authService:AuthService,
    private router:Router
  ) { } 

  canActivate(): boolean {

    if(!this.authService.isAuth()){
      console.log('Token is not valid or is expired');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}


