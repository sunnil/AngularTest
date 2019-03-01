import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Signup} from '../header/signup/signup.model';

@Injectable({
  providedIn: 'root',
  
})
export class SignupService {

  constructor(private http:HttpClient) { }
  signup(data){
    return this.http.post(`${environment.apiPath}/register`,data);
  }
}
