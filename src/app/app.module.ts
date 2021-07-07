import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenudejeuComponent} from './menudejeu/menudejeu.component';
import {PartieencoursComponent} from './partieencours/partieencours.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MenueditionComponent} from './menuedition/menuedition.component';
import { AjoutertimelineComponent } from './ajoutertimeline/ajoutertimeline.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenudejeuComponent,
    PartieencoursComponent,
    MenueditionComponent,
    AjoutertimelineComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: MenudejeuComponent},
      {path: 'edit', component: MenueditionComponent},
      {path: 'play', component: PartieencoursComponent},
      {path: 'addtimeline', component: AjoutertimelineComponent},


    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
