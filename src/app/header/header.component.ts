import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  public name:any;

  constructor(private router: Router, public login: LoginService) {
    this.userName();
  }

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  public logout() {
    this.login.logout();
    this.router.navigate(['login']);
    this.userName();
  }

  public userName() {
    if(this.login.isLoggedIn()){
       this.name = this.login.getUser().firstName + " " + this.login.getUser().lastName;
    }else{
       this.name="User";
    }
  }
}
