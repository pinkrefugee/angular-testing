import { HighlightDirective } from './highlight.directive';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HighlightDirective
      ],
    }).compileComponents();
  }));

  it('should change background', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });

});
