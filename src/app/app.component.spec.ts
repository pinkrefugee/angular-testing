import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contain Hello', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appElement: HTMLElement = fixture.nativeElement;
    const p = appElement.querySelector('p');
    expect(p.textContent).toEqual('Hello');
  });
});
