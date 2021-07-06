import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenudejeuComponent } from './menudejeu/menudejeu.component';
import { PartieencoursComponent } from './partieencours/partieencours.component';

@NgModule({
  declarations: [
    AppComponent,
    MenudejeuComponent,
    PartieencoursComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
