import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginserviceService } from '../../services/loginservice.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatInputModule,CommonModule,FormsModule,MatProgressSpinnerModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private snack:MatSnackBar, private login:LoginserviceService){}



  data={
    username:"",
    password:"",
  }

  flag:boolean=false;
  submitForm(){
  
    console.log("submitForm clicked !")


    if((this.data.username!='' && this.data.password!='' ) && (this.data.username!=null && this.data.password!=null )){
      this.flag=true;
      this.login.signup(this.data).subscribe(
        (response:any)=>{
          console.log("Got the response from api !")
          console.log(response)
          this.snack.open("Signup Successful !" , "OK")
          this.flag=false;
          //this.login.loginuser(response.token)
        },error=>{
          console.log("error occured")
          console.log(error)
          this.snack.open("Signup  not Successful !","OK")
          this.flag=false;
        }
      )
    }
    else{
      console.log("Credentials can't be blank or null !")

    }   
    //this.flag=false;
  }

}
