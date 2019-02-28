import { Component } from '@angular/core';
import { HeroService } from './heroes/shared/hero.service';
@Component({
  selector: 'toh-app',
  template: `
      <toh-heroes></toh-heroes>
    `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {y
  title = 'AngularStructure';
}
