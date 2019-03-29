import { TestBed } from '@angular/core/testing';

import { ApikpokemonService } from './apikpokemon.service';

describe('ApikpokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApikpokemonService = TestBed.get(ApikpokemonService);
    expect(service).toBeTruthy();
  });
});
