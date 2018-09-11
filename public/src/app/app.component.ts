import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  test = "left";
  test2="right";
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router){}
  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
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
