import { TestBed } from '@angular/core/testing';

import { NgxHotkeysService } from './ngx-hotkeys.service';

describe('NgxHotkeysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxHotkeysService = TestBed.get(NgxHotkeysService);
    expect(service).toBeTruthy();
  });
});
