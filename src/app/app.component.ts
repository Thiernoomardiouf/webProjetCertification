import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  connect;

  constructor(public Login: LoginService){
    this.connect = Login.isLoggedIn();
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
