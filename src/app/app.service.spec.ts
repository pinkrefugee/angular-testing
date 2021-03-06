import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

fdescribe('AppService', () => {

  let service: AppService;
  beforeEach(() => TestBed.configureTestingModule({providers: [AppService]}));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('should use appService', () => {
    service = TestBed.get(AppService);
    expect(service.getCrazyNumber()).toBe(19);
  });
});
