import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosComponenteComponent } from './servicios-componente.component';

describe('ServiciosComponenteComponent', () => {
  let component: ServiciosComponenteComponent;
  let fixture: ComponentFixture<ServiciosComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
