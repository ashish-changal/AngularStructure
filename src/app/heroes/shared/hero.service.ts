import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HEROES } from './mock-heroes';
import { ExceptionService, SpinnerService, ToastService } from '../../core';
import { Hero } from './hero.model';
@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
}