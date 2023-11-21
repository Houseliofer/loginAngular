import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  user = 
  {
    userName: 'kevin',
    pass: '123'
  };

  constructor(
    private authService:AuthService,
    private router:Router) { }
  login() {
    console.log(this.user);
    this.authService.singin(this.user).subscribe((res:any)=>{
      localStorage.setItem('token',res.token);
      this.router.navigate(['private']);
    });
  }
}
