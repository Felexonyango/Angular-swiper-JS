import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestContentComponent } from './suggest-content.component';

describe('SuggestContentComponent', () => {
  let component: SuggestContentComponent;
  let fixture: ComponentFixture<SuggestContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
