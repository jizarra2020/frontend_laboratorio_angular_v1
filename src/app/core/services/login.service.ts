import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  loginConLaravel(datos: any){
    return this.http.post('http://127.0.0.1:8000/api/v1/auth/login', datos);
  }

  getPerfil(){
    return this.http.get('http://127.0.0.1:8000/api/v1/auth/perfil');
  }
  

}
