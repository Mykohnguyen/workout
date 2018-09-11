import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _bodyimage : any;
  test = "left";
  test2="right";
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router){}
  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.testing();
  }
  testing(){
    let observable= this._httpService.getEmail();
    console.log(observable);
  }
  minimize(){
    this.test = "leftSmall"
    this.test2= "rightBig"
    console.log(this.test);
  }
  normal(){
    this.test= "left";
    this.test2="right";
  }

}