import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPropsComponent } from './child-props.component';

describe('ChildPropsComponent', () => {
  let component: ChildPropsComponent;
  let fixture: ComponentFixture<ChildPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildPropsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
