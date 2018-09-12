import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  _newExercise : any;
  _rows = [1,2,3,4,5]
  _columns = [1,2,3]

  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._newExercise={name:"",muscle_group:[],push_pull:""}
  }
  onExerciseFormSubmit(muscle_group){
    if(this._newExercise.muscle_group.shoulder == true){
      this._newExercise.muscle_group.push("Shoulder")
    }
    let observable = this._httpService.addExercise(this._newExercise)
    observable.subscribe(data=>{
    })
  }

}
