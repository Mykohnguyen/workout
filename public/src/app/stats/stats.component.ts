import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  LineChart = [];
  _workouts:any;
  _switch:boolean = true;
  _type = 'line';
  _selectedWorkout:any;
  _list = false;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getWorkouts();
  }
  getWorkouts(){
    let observable = this._httpService.getWorkouts();
    observable.subscribe(data=>{
      this._workouts= data;
      console.log(this._workouts)
    })
  }
  // switchGraph(){
  //   this._switch = !this._switch
  //   if(this._switch == true){
  //     this._type = 'line'
  //     this.drawChart()
  //   }
  //   else{
  //     this._type= 'bar'
  //     this.drawChart();
  //   }
  // }
  showList(){
    this._list = true;
  }
}
