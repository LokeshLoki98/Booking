import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgimgComponent } from './bgimg.component';

describe('BgimgComponent', () => {
  let component: BgimgComponent;
  let fixture: ComponentFixture<BgimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
