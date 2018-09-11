import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnerepComponent } from './onerep.component';

describe('OnerepComponent', () => {
  let component: OnerepComponent;
  let fixture: ComponentFixture<OnerepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnerepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnerepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
