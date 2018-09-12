import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}
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
    return this._http.post('api/user/workout/update/'+id,workout)
  }
}
