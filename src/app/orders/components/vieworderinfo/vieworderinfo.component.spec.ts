import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderinfoComponent } from './vieworderinfo.component';

describe('VieworderinfoComponent', () => {
  let component: VieworderinfoComponent;
  let fixture: ComponentFixture<VieworderinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VieworderinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VieworderinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
