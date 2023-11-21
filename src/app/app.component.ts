import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: []
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private authService:AuthService
  ) { }

  logout():void{
    this.authService.logout();
  }

  isAuthenticaded():boolean{
    return this.authService.isAuth();
  }
}
