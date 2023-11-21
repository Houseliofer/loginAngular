import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtDecodeResult } from '../models/jwtDecodeResult.model';

import { jwtDecode } from "jwt-decode";


@Injectable({ 
  providedIn: 'root'
})
export class RoleGuard implements CanActivate{

  constructor(
    private authService:AuthService,
    private router:Router
  ) { } 

  canActivate(route:ActivatedRouteSnapshot): boolean {
    const expectedRole=route.data['expectedRol'];
    const token = localStorage.getItem('token');
    if (token !== null) {
      const {userName,roleId}:JwtDecodeResult=jwtDecode(token);
      //console.log(jwtDecode(token));
      //console.log(userName);
      //console.log(roleId);
      if(!this.authService.isAuth||roleId!==expectedRole){
        console.error('You do not have permission!');
        this.router.navigate(['private']);
        return false;
      }
    } else {
      console.error('It does not exist token');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}


