import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioContactoComponent } from './fomulario-contacto.component';

describe('FomularioContactoComponent', () => {
  let component: FomularioContactoComponent;
  let fixture: ComponentFixture<FomularioContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomularioContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomularioContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
