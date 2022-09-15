import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourMedecinComponent } from './retour-medecin.component';

describe('RetourMedecinComponent', () => {
  let component: RetourMedecinComponent;
  let fixture: ComponentFixture<RetourMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourMedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetourMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
