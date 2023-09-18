import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

loginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required), 
  });

  constructor (private LoginService: LoginService){

  }
  
  ingresar(){
    //alert("ingresando");
    this.LoginService.loginConLaravel(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("token", res.accessToken)

        this.LoginService.getPerfil().subscribe(

          (res: any) => {
            console.log(res);
          }
        )        
        alert("BIENVENIDO")
      },
      (error: any) => {
        console.log(error);
        if (error.status === 401) {

          alert("Credenciales Incorrectas")
        }
      }
    )
  }

}
