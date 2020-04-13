import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { By } from '@angular/platform-browser';

fdescribe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let userDe;
  let userEl; 
  let expectedUser;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    userDe = fixture.debugElement.query(By.css('.user'));
    userEl = userDe.nativeElement;

    expectedUser = { id: 42, name: 'Test Name' };

    component.user = expectedUser;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display hero name in uppercase', () => {
    const expectedPipedName = expectedUser.name.toUpperCase();
    expect(userEl.textContent).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked (triggerEventHandler)', () => {
    let selectedUser;
    component.selected.subscribe((user) => selectedUser = user);

    userDe.triggerEventHandler('click', null);
    expect(selectedUser).toBe(expectedUser);
  });
});
