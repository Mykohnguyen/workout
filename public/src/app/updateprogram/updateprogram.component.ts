import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-updateprogram',
  templateUrl: './updateprogram.component.html',
  styleUrls: ['./updateprogram.component.css']
})
export class UpdateprogramComponent implements OnInit {
  _allWorkout:any;
  _email= "me@me.com"
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getWorkouts();
  }

   getWorkouts(){
    let observable=this._httpService.getWorkouts();
    observable.subscribe(data=>{
      this._allWorkout=data;
    })
  }
}
