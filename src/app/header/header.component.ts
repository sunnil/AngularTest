import { Component, OnInit, NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@NgModule({
  imports:[
    LoginComponent,
    SignupComponent
  ]
})
export class HeaderComponent implements OnInit {

 
  
  constructor() { }

  ngOnInit() {
  }

}
