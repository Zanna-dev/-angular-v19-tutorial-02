import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResusableComponent } from './resusable.component';

describe('ResusableComponent', () => {
  let component: ResusableComponent;
  let fixture: ComponentFixture<ResusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
