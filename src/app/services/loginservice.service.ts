import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

url="http://localhost:8080/generateToken"
signupurl="http://localhost:8080/signup"

constructor(private http: HttpClient  ) { }

generateToken(data:any ){
  console.log(`${this.url}`)
  return this.http.post(`${this.url}`,data)

}

signup(data:any ){
  console.log(`${this.signupurl}`)
  return this.http.post(`${this.signupurl}`,data)

}

getToken(){
  return localStorage.getItem("token");
}


  loginuser(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  isLoggedIn(){
    if (typeof localStorage == 'undefined') {
      console.log('localStorage undefined !')
      return false;
    }

    let token=localStorage.getItem("token");

    console.log(token)
    if(token===undefined || token === '' || token === null){
      console.log('returning false !')
      return false;
    }
    return true;
  }

  logout(){
    localStorage.removeItem("token")
    return true;
  }
}
