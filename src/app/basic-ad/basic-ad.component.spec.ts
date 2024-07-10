import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAdComponent } from './basic-ad.component';

describe('BasicAdComponent', () => {
  let component: BasicAdComponent;
  let fixture: ComponentFixture<BasicAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
