import { TestBed } from '@angular/core/testing';

import { LoopbattleService } from './loopbattle.service';

describe('LoopbattleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoopbattleService = TestBed.get(LoopbattleService);
    expect(service).toBeTruthy();
  });
});
