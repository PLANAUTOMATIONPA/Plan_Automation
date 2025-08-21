import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriasComponenteComponent } from './industrias-componente.component';

describe('IndustriasComponenteComponent', () => {
  let component: IndustriasComponenteComponent;
  let fixture: ComponentFixture<IndustriasComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriasComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriasComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
