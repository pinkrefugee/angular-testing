import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { AppService } from '../app.service';



fdescribe('WelcomeComponent', () => {
  let appServiceStub: Partial<AppService>;

  beforeEach(() => {
    appServiceStub = {
      number: 19,
      getCrazyNumber() {
        return this.number;
      }
    };

    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [{ provide: AppService, useValue: appServiceStub }],
    });
  });

  it('should welcome the user', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const el = fixture.nativeElement.querySelector('.welcome');
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain(19, 'expected number');
  });
});