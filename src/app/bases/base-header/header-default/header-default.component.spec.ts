import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDefaultComponent } from './header-default.component';

describe('HeaderDefaultComponent', () => {
  let component: HeaderDefaultComponent;
  let fixture: ComponentFixture<HeaderDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
