import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  @Input() listOfExercises: any;
  // 1. Create an Event in the ChildComponent
  @Output() myEvent= new EventEmitter();
  constructor() { }
  callParent(exercise){
      this.myEvent.emit(exercise);
  }
  ngOnInit() {
  }
}
