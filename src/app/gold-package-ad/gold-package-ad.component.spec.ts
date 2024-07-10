import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldPackageAdComponent } from './gold-package-ad.component';

describe('GoldPackageAdComponent', () => {
  let component: GoldPackageAdComponent;
  let fixture: ComponentFixture<GoldPackageAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldPackageAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldPackageAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
