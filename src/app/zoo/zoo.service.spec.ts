/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZooService } from './zoo.service';

describe('Service: Zoo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZooService]
    });
  });

  it('should ...', inject([ZooService], (service: ZooService) => {
    expect(service).toBeTruthy();
  }));
});
