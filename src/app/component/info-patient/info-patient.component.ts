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

  addNewCondition() : void {
    const box = document.getElementById('add_declaration');
    if (box != null){
      box.style.display = 'inline';
    }
  }

  addAppointment() {
    this.fhirService.postAppointment(
      {
        "resourceType": "Appointment",
        "status": "waitlist",
        "participant": [
          {
            "actor": {
              "type": "Patient",
              "identifier": {
                "value": "6321e71ed83022001917f14c"
              }
            }
          }

        ]
      }).subscribe(data => {
        document.location.reload();
      })
  }

  submitCondition() : void{
    let date : any = document.getElementById("condition_date_id");
    let code : any = document.getElementById("condition_selector_id");
    let description : any = document.getElementById("condition_description_id");
    if (date.value == "") {
      alert("Veuillez entrer une date !");
    }
    if (code.value == "") {
      alert("Veuillez sélecionner un type d'accident !");
    }
    if (description.value == "") {
      alert("Veuillez décrire votre accident !")
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
    this.fhirService.postCondition(JSON.stringify(newCondition)).subscribe((data : any) => {
      let is_RDV:any = document.getElementById("appointement_checkbox");
      if(is_RDV.checked == true){
        this.addAppointment();
      }else{
        document.location.reload();
      }
    }) 
  }

  deleteConditions() {
    let conditions_delete : any = []
    let checkboxes : any = document.getElementsByClassName('checkboxes');
    let cpt = 0;
    if (checkboxes != null) {
      for (let checkbox of checkboxes) {
        if (checkbox.checked){
          conditions_delete.push(checkbox.id);
          cpt++;
        }
      }
      if (cpt === 0) {
        alert("Veuillez selectionner au moins une déclaration !");
      } else {
        for (let idCondition of conditions_delete) {
          this.fhirService.deleteCondition(idCondition).subscribe(data => {
            cpt--;
            if(cpt===0){
              document.location.reload();
            }
          });
        }
      }
    }
  }
}
