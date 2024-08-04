import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParantDataComponent } from './parant-data.component';

describe('ParantDataComponent', () => {
  let component: ParantDataComponent;
  let fixture: ComponentFixture<ParantDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParantDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParantDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
