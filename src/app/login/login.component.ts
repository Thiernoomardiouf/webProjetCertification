import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  formSubmit(){
    if(this.loginForm.value.username == "" || this.loginForm.value.password == ""){
      Swal.fire({
        title: 'Error!',
        text: 'Veuillez remplir tous les champs',
        icon: 'error',
      });
    }
      // request to generate token
      this.loginService.generateToken(this.loginForm.value).subscribe(
        (data: any) => {
          console.log(data);
          this.loginService.loginUser(data.token);

          this.loginService.getCurrentUser().subscribe(
            (user: any) => {
              this.loginService.setUser(user);
              console.log(user);
              // location.reload();
              if(this.loginService.getUserRole() == "Admin"){
                window.location.href = "/home";
              }else if(this.loginService.getUserRole() == "Secretaire"){
                window.location.href = "/home";
              }else if(this.loginService.getUserRole() == "chefDeProjet"){
                window.location.href = "/home";
              }else if(this.loginService.getUserRole() == "employe"){
                window.location.href = "/home";
              }else{
                this.loginService.logout();
              }
            }
          )
        },(err: any) => {
          console.log("Error !", err);
          console.log(err);
          Swal.fire({
            title: 'Error!',
            text: 'Le login ou le mot de passe est incorrect',
            icon: 'error',
          });
        }
      );
  }


}
