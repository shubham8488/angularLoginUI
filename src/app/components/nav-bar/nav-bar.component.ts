import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { LoginserviceService } from '../../services/loginservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,RouterModule,MatButtonModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public loggedIn=false;
  
  constructor(private Login : LoginserviceService){

  }

  ngOnInit():void{
    console.log('ngOnInit called !')

    this.loggedIn=this.Login.isLoggedIn();
  }

  logoutUser(){

    console.log("Logout method called !")
    this.Login.logout();
    location.reload();
  }

}
