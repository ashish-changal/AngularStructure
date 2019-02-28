import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ValidateDirective } from './shared/validate.directive';
import { CoreModule }    from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ValidateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    
  ],
  providers: [],
  exports: [ AppComponent ],
  entryComponents: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
