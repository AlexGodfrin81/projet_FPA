import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RetourMedecinComponent } from './component/retour-medecin/retour-medecin.component';
import { InfoPatientComponent } from './component/info-patient/info-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    RetourMedecinComponent,
    InfoPatientComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
