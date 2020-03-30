import { AppService } from './app.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { cold, getTestScheduler } from 'jasmine-marbles';

fdescribe('AppComponent', () => {
  let appServiceStub: Partial<AppService>;
  let quote;
  appServiceStub = {
    quote,
    getQuote() {
      return this.quote;
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ], providers: [AppService]
    }).compileComponents();
  }));

  it('should create the app', () => {
  
    const fixture = TestBed.createComponent(AppComponent);
    const quoteEl = fixture.nativeElement.querySelector('.quote');
    quote = cold('---x|', { x: 'Hi' });
    appServiceStub.getQuote();

    fixture.detectChanges();

    getTestScheduler().flush();

    fixture.detectChanges();

    expect(quoteEl.textContent).toBe('Hi');
  });

});
