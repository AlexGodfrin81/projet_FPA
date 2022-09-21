import { Component, OnInit } from '@angular/core';
import { FhirServicesService } from 'src/app/services/fhir-services.service';
@Component({
  selector: 'app-retour-medecin',
  templateUrl: './retour-medecin.component.html',
  styleUrls: ['./retour-medecin.component.css']
})
export class RetourMedecinComponent implements OnInit {
  idPatient: string = "6321e71ed83022001917f14c";
  conditions: any;

  constructor(private fhirService: FhirServicesService) { }

  ngOnInit(): void {
    this.fhirService.getConditionForPatientRDV(this.idPatient).subscribe((data: any) => {
      this.conditions = [];
      let counter: any = 0;
      for (let c of data) {

        if (c.recordedDate != null) {
          if (c.note[0].text != null) {
            let date: any = new Date(c.recordedDate);
            if ((date.getMonth() + 1) < 10) {
              c.recordedDate = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate()
            } if ((date.getMonth() + 1) > 9) {
              c.recordedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
            }
            if (counter != 6) {
              this.conditions.push(c);
              counter += 1;
            }
          }
        }
      }
      console.log(this.conditions);
    })
  }

}
