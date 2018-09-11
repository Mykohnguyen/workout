import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  t:any;
  constructor(private _http: HttpClient){}
  emailEmitter = new EventEmitter();
  subscribeToEmitter(){
    return this.emailEmitter;
  }
  emailSend(email){
    this.t=email;
    console.log(email,"htp service")
    this.emailEmitter.emit(email);
  }
  getEmail(){
    return this.t;
  }
  getExercises(muscle){
    return this._http.get('api/exercises/'+ muscle);
  }
  addExercise(exercise){
    return this._http.post('api/exercise/new/',exercise);
  }
  showExercise(exercise){
    return this._http.get('api/exercise/'+exercise);
  }
  editExercise(exercise){
    return this._http.post('api/exercise/edit/'+exercise._id,exercise);
  }
  removeExercise(exercise){
    return this._http.post('api/exercise/remove/'+ exercise._id,exercise);
  }
  registerUser(user){
    console.log("service",user);
    return this._http.post('api/user/new',user)
  }
  loginUser(user){
    return this._http.post('api/user/login',user)
  }
  newWorkout(exercises,email){
    return this._http.post('api/workout/new/'+email,exercises)
  }
  getWorkouts(){
    return this._http.get('api/user/workout/')
  }
  showWorkout(id){
    return this._http.get('api/user/workoutplan/'+id, id)
  }
  updateWorkout(workout,id){
    console.log(workout,id)
    return this._http.post('api/user/workout/update/'+id,workout)
  }
}
