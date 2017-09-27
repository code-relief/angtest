import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureSnapComponent } from './picture-snap.component';

describe('PictureSnapComponent', () => {
  let component: PictureSnapComponent;
  let fixture: ComponentFixture<PictureSnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureSnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
