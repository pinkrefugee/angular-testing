import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-child
      [user]="user" (selected)="onSelected($event)">
  </app-child>`
})
class TestHostComponent {
  user = {id: 42, name: 'Test Name' };
  selectedUser;
  onSelected(user) { 
    this.selectedUser = user; 
  }
}

fdescribe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let userDe;
  let userEl; 
  let expectedUser;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent, TestHostComponent ]
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
    const testFixture  = TestBed.createComponent(TestHostComponent);
    const testHost = testFixture.componentInstance;
    const testUserEl = fixture.nativeElement.querySelector('.user');
    testFixture.detectChanges();

    testUserEl.click();
    expect(testHost.selectedUser).toBe(testHost.user);
  });
});
