import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  newUser:any;
  _user:any;
  _email:any
  sendEmail(email){
    console.log(email,"log comp")
    this._httpService.emailSend(email);
  }
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newUser={name:"", email:"",password:""};
    this._user={email:"",password:""};

    console.log(this.newUser);
  }

  onFormSubmit(){
    console.log("componenent")
    let observable = this._httpService.registerUser(this.newUser);
    observable.subscribe(data=>{
      console.log("accepted",data);
    })
  }
  onLogin(){
    console.log("1");
    let observable = this._httpService.loginUser(this._user);
    observable.subscribe(data =>{
      this._email = data;
      if(data == "FAIL"){
        console.log('failed to log in')
      }
      else{
        console.log("HI!")
        this._router.navigate(['/home'])
      }
      console.log(data);
    })
  }
}
