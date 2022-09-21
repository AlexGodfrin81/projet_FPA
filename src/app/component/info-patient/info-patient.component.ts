import { FhirServicesService } from './../../services/fhir-services.service';
import { Component, OnInit } from '@angular/core';
import codeJSON from "../../../assets/code.json";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit {
  idPatient : string = "6321e71ed83022001917f14c";
  codes: any;
  conditions : any;
  constructor(private fhirService : FhirServicesService) { }
  
  
  ngOnInit(): void {
    this.codes = codeJSON;
    this.fhirService.getConditionForPatient(this.idPatient).subscribe(data => {
      this.conditions = data;
      console.log(this.conditions);
    });
  }

  onSubmitCondition(form : NgForm) {
    console.log(form.value);
  }

  addNewCondition() : void {
    const box = document.getElementById('add_declaration');
    if (box != null){
      box.style.display = 'inline';
    }
  }

  submitCondition() : void{
    const date : any = document.getElementById("condition_date_id");
    const code : any = document.getElementById("condition_selector_id");
    const description : any = document.getElementById("condition_description_id");
    if (date != null) {
      console.log(date.value);
    }
    if (code != null) {
      console.log(code.value);
      console.log(code.options[code.selectedIndex].text);
    }
    if (description != null) {
      console.log(description.value);
    }
    let newCondition = {
      resourceType: "Condition",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: code.value,
            display: code.options[code.selectedIndex].text
          }
        ],
        text: code.options[code.selectedIndex].text
      },
      subject: {
        reference: "Patient/"+this.idPatient
      },
      recordedDate: date.value,
      recorder: {
        reference: "Patient/"+this.idPatient,
        display: "Patient"
      },
      note: [
        {
          text: description.value
        }
      ]
    }
    this.fhirService.postCondition(JSON.stringify(newCondition)).subscribe(data => {
      const table : any = document.getElementById('table_condition');
      if (table != null) {
        
      }
    })
    
  }

}
