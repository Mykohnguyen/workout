import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-onerep',
  templateUrl: './onerep.component.html',
  styleUrls: ['./onerep.component.css']
})
export class OnerepComponent implements OnInit {
  _selectedWorkout:any;
  _selectedExercise:any;
  _allWorkouts:any;
  LineChart = []
  exerciseData: any;
  exerciseDate:any;
  singleArray:any;
  exercisePound:any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this._httpService.showWorkout(params['id']).subscribe(data =>{
        this._selectedWorkout = data;
      })
    })
    this._httpService.getWorkouts().subscribe(data=>{
      this._allWorkouts = data;
    })
  }
  selectedExercise(exercise){
    this._selectedExercise = exercise;
    let test = [];
    let dates = [];
    let pounds = [];
    for(var i = 0; i  < this._allWorkouts.length ; i++){
      for(var x = 0 ; x < this._allWorkouts[i].workout.length ; x++){
        if(this._allWorkouts[i].workout[x].name == exercise){
          pounds.push(this._allWorkouts[i].workout[x].pounds);
          test.push(this._allWorkouts[i].workout[x].pounds*this._allWorkouts[i].workout[x].rep*.033+this._allWorkouts[i].workout[x].pounds)
          dates.push(this._allWorkouts[i].date)
        }
      }
    }
    this.exerciseData = test;
    this.exerciseDate=dates;
    this.exercisePound =pounds;
    this.drawChart();
    this.joinArray();
  }
  joinArray(){
    let test = [];
    for(let i = 0; i < this.exerciseData.length;i++){
      test.push({
        date:this.exerciseDate[i],
        pound:this.exercisePound[i]

      })
    }
    this.singleArray = test;
  }
  drawChart(){
    let pipe = new DatePipe('en-US')
    let date = []
    for(var i = 0 ; i < this.exerciseDate.length;i++){
      date.push(pipe.transform(this.exerciseDate[i],'mediumDate'))
    }
    Chart.defaults.global.defaultFontColor = 'black';
    this.LineChart = new Chart('lineChart',{
      type:'line',
      data:{
        labels:date,
        datasets:[{
          label:"Calculated Max",
          data:this.exerciseData,
          fill:true,
          lineTension:0.2,
          borderColor:"sandybrown",
          borderWidth:2,
          fontColor:'white',
          backgroundColor:'whitesmoke'
        }]
      },
      options:{
        title:{
          text:this._selectedExercise,
          display:true
        },
        scales:{
          yAxes:[{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    })
  }
}
