import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {

  let service: AppService;
  beforeEach(() => TestBed.configureTestingModule({providers: [AppService]}));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
});
