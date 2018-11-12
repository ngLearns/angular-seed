import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHotkeysComponent } from './ngx-hotkeys.component';

describe('NgxHotkeysComponent', () => {
  let component: NgxHotkeysComponent;
  let fixture: ComponentFixture<NgxHotkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxHotkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHotkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
