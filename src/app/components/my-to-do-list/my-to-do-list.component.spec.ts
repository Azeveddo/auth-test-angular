import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToDoListComponent } from './my-to-do-list.component';

describe('MyToDoListComponent', () => {
  let component: MyToDoListComponent;
  let fixture: ComponentFixture<MyToDoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyToDoListComponent]
    });
    fixture = TestBed.createComponent(MyToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
