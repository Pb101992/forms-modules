import { TestBed } from '@angular/core/testing';

import { ChildModuleService } from './child-module.service';

describe('ChildModuleService', () => {
  let service: ChildModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
