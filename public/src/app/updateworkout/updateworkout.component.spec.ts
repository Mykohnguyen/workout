import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateworkoutComponent } from './updateworkout.component';

describe('UpdateworkoutComponent', () => {
  let component: UpdateworkoutComponent;
  let fixture: ComponentFixture<UpdateworkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateworkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
