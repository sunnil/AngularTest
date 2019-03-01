import { Component, OnInit, NgModule } from '@angular/core';
import { Login } from './login.model';
import {FormsModule, FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@NgModule({
  imports:[
    Login,
    FormsModule,
    FormGroup,
    FormControl,
    ReactiveFormsModule,
    FormBuilder
  ],
  providers:[
    Login
  ]
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  email:FormControl;
  password:FormControl;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
      password:new FormControl
    }); 

  }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
