import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public host:string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // current user:wich user is login
  public getCurrentUser(){
    return this.http.get(this.host + '/current-user');
  }

  // gererate token
  public generateToken(request: any){
    return this.http.post(this.host+'/gererate-token', request);
  }

  // login User: set token in local storage
  public loginUser(token){
    localStorage.setItem('token', token);
    return true;
  }

  //islogin: user is login or not
  public isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token == undefined || token == '' || token == null){
      return false;
    }else{
      return true;
    }
  }

  //logout: remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // get token
  public getToken(){
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user
  public getUser(){
    let user = localStorage.getItem('user');
    if(user != null){
      return JSON.parse(user);
    }else{
      this.logout();
      return null;
    }
  }

  //get user role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

}
