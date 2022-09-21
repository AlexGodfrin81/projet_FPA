import { Component } from '@angular/core';
import { FhirServicesService } from './services/fhir-services.service';
import codeJSON from "../assets/code.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FPA';
 
  idPatient : string = "6321e71ed83022001917f14c";
  patient:any;
  conditions : any;
  practitioner:any; 
  code:any;
  constructor(private fhirService : FhirServicesService){

  }
  ngOnInit(): void{
    this.code = codeJSON;
    console.log(this.code);
    this.fhirService.getConditionForPatient(this.idPatient).subscribe(data => {
      this.conditions = data;
      console.log(this.conditions);
    });
    this.fhirService.getPatient(this.idPatient).subscribe(data => {
      this.patient = data;
      console.log(this.patient)
      this.fhirService.getPractitioner(this.patient.generalPractitioner[0].reference).subscribe(data =>{
        this.practitioner = data;
        console.log(this.practitioner)
      })
    })
  }
}