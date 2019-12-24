import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNewComponent } from './about-new.component';

describe('AboutNewComponent', () => {
  let component: AboutNewComponent;
  let fixture: ComponentFixture<AboutNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
