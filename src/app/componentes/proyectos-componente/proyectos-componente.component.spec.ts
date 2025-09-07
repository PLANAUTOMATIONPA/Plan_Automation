import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosComponenteComponent } from './proyectos-componente.component';

describe('ProyectosComponenteComponent', () => {
  let component: ProyectosComponenteComponent;
  let fixture: ComponentFixture<ProyectosComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
