import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './createworkout.component.html',
  styleUrls: ['./createworkout.component.css']
})
export class CreateworkoutComponent implements OnInit {
  _bodyimage : any;
  _leg= false;
  _shoulder=false;
  _arms=false;
  _muscle: any;
  _addedExercises = [];
  _email = "me@me.com";

  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router){}
  invoked(event){
    console.log(event);
    this._addedExercises.push({name:event,set:0,goal:0});
  }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    this._bodyimage= 'assets/static/blank_figure.png';
    }
  //Clicking to highlight the body part
  clickChest(){
    this._bodyimage='assets/static/blank_figure_chest.png'
    this._shoulder=false;
    this._arms=false;
    this._leg=false;
  }
  clickBack(){
    this._bodyimage='assets/static/blank_figure_back.png'
    this._shoulder=false;
    this._arms=false;
    this._leg=false;
  }
  clickShoulder(){
    this._bodyimage='assets/static/blank_figure_shoulder.png'
    this._shoulder = !this._shoulder;
    this._leg = false;
    this._arms= false;
  }
  clickLegs(){
    this._bodyimage='assets/static/blank_figure_leg.png';
    this._leg=!this._leg;
    this._arms=false;
    this._shoulder=false;
  }
  clickArm(){
    this._bodyimage='assets/static/blank_figure_arms.png'
    this._leg=false;
    this._shoulder=false;
    this._arms=!this._arms;
  }
  clickAbs(){
    this._bodyimage='assets/static/blank_figure_abs.png'
    this._shoulder=false;
    this._arms=false;
    this._leg=false;
  }
  clickHamstring(){
    this._bodyimage='assets/static/blank_figure_hamstring.png'
  }
  clickGlutes(){
    this._bodyimage='assets/static/blank_figure_glutes.png'
  }
  clickQuadriceps(){
    this._bodyimage='assets/static/blank_figure_quad.png'
  }
  clickCalf(){
    this._bodyimage='assets/static/blank_figure_calf.png'
  }
  clickTrap(){
    this._bodyimage='assets/static/blank_figure_trap.png'
  }
  clickBicep(){
    this._bodyimage='assets/static/blank_figure_bicep.png'
  }
  clickTricep(){
    this._bodyimage='assets/static/blank_figure_tricep.png'
  }
  clickDeltoid(){
    this._bodyimage='assets/static/blank_figure_delt.png'
  }
  muscleToShow(muscle){
    let observable = this._httpService.getExercises(muscle);
    observable.subscribe(data=>{
      this._muscle = data;
    })
  }
  addToWorkoutPlan(exercise){
    this._addedExercises.push(exercise);
  }
  formatWorkout(){
      let observable = this._httpService.newWorkout(this._addedExercises,this._email);
      observable.subscribe(data=>{
        this._router.navigate(['/updateprogram'])
      })
  }
  removeFromList(exercise){
    for(let i= 0 ; i < this._addedExercises.length;i++){
      if(this._addedExercises[i].name == exercise){
        this._addedExercises.splice(i,1);
      }
    }
  }
}