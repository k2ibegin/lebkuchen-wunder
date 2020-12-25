import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTelegram, faTelegramPlane, faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTelegramPlane, faInstagram, faWhatsapp, faViber, faTelegram);
  }
}
