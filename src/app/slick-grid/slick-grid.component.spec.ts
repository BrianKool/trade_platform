import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickGridComponent } from './slick-grid.component';

describe('SlickGridComponent', () => {
  let component: SlickGridComponent;
  let fixture: ComponentFixture<SlickGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlickGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
