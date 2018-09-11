import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {
  _bodyimage:any;
  _allchest:any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params));
    this._bodyimage='assets/static/blank_figure_chest.png'
    this.getAllChestExercises()
  }
  getAllChestExercises(){
    let observable = this._httpService.getExercises("Chest");
    observable.subscribe(data =>{
      this._allchest = data;
      console.log(data);
    })
  }

}
