import { TestBed } from '@angular/core/testing';

import { AirIndexSocketService } from './air-index-socket.service';

describe('AirIndexSocketServiceService', () => {
  let service: AirIndexSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirIndexSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
