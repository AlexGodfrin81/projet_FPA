import { InfoPatientComponent } from './component/info-patient/info-patient.component';
import { RetourMedecinComponent } from './component/retour-medecin/retour-medecin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'infoPatient', component: InfoPatientComponent },
  { path: 'retourMedecin', component: RetourMedecinComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
