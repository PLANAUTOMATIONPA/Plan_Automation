import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCallComponent } from './boton-call.component';

describe('BotonCallComponent', () => {
  let component: BotonCallComponent;
  let fixture: ComponentFixture<BotonCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
