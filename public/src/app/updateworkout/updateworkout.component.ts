import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder,FormArray } from '@angular/forms';



@Component({
  selector: 'app-updateworkout',
  templateUrl: './updateworkout.component.html',
  styleUrls: ['./updateworkout.component.css']
})
export class UpdateworkoutComponent implements OnInit {
  _workout: any;
  _email:any;
  _id:any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) {
    }

  ngOnInit(){
    this._email = this._httpService.getEmail();
    this._route.params.subscribe((params:Params) => {
      this._id=params['id']
      this._httpService.showWorkout(params['id']).subscribe(data =>{
        this._workout = data;
      })
    })
  }
  updateWorkout(event){
    var test = []
    for(var x = 0 ; x < Math.floor(event.target.length/4);x++){
      var newobj = {"name":event.target[x*4].value,"set":event.target[x*4+1].value, "rep":event.target[x*4+2].value, "pounds":event.target[x*4+3].value}
      test.push(newobj)
    }
    console.log(event,test,this._id)
    let observable = this._httpService.updateWorkout(test,this._id);
    observable.subscribe(data=>{
      this._router.navigate(['/home'])
    })
  }

}
