import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpNgforComponent } from './http-ngfor.component';

describe('HttpNgforComponent', () => {
  let component: HttpNgforComponent;
  let fixture: ComponentFixture<HttpNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
