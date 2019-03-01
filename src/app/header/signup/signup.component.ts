import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { Signup } from './signup.model';
import { FormGroup, FormControl, FormsModule, NgForm, Validators,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from '../../_service/signup.service';
import { first} from 'rxjs/operators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

@NgModule({
  imports:[
    ReactiveFormsModule,
    FormsModule,
    NgForm,
    FormControl,
    Validators,
    FormBuilder,
    SignupService,
    Response
  ],
  providers:[
    Signup
  ]
  
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') form:any;
  model: Signup = new Signup();
  constructor(private signupservice:SignupService,private router:Router) { }

  ngOnInit() {
    let model = new FormGroup({
      firstname: new FormControl ('',Validators.required),
      lastname: new FormControl ('',Validators.required),
      email:new FormControl ('',Validators.required),
      password:new FormControl ('',Validators.required)
    })
  }
  onSubmit(){
 return this.signupservice.signup(this.form.value)
  .pipe(first()).subscribe(data => {
    this.router.navigate(['/home']);
  });
  
  }
}
