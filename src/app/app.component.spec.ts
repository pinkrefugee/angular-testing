import { AppService } from './app.service';
import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';


fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ], providers: [AppService],
    }).compileComponents();
  }));

  it('should increment in template after 5 seconds', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement;

    debugElement
        .query(By.css('button.increment'))
        .triggerEventHandler('click', null);

     // flush() - wait for macrotask queue to be empty
    tick(2000);
    fixture.detectChanges();
    let value;
    value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1');

    tick(3000);
    fixture.detectChanges();

    value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('2');
  }));
});
