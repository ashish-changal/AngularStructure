import { Injectable } from '@angular/core';
import { Hero } from '../heroes/shared/hero.model';

// import { Hero } from './hero.model';

@Injectable()
export class HeroCollectorService {
  hero: Hero;

  constructor() { }
}