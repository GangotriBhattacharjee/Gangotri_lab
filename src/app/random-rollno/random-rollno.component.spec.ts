import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRollnoComponent } from './random-rollno.component';

describe('RandomRollnoComponent', () => {
  let component: RandomRollnoComponent;
  let fixture: ComponentFixture<RandomRollnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRollnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomRollnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
