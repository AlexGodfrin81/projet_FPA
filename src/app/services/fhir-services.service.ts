import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FhirServicesService {

  constructor(private httpClient : HttpClient) { }
  private urlPractitioner = "https://fhir.alliance4u.io/api/practitioner/"; 
  private urlPatient = "https://fhir.alliance4u.io/api/patient/";
  private urlCondition = "https://fhir.alliance4u.io/api/condition";
  private urlConditionForPatient =  'https://fhir.alliance4u.io/api/condition?subject.reference=Patient/';

    getPatient(idPatient : string) {
      return this.httpClient.get(this.urlPatient + idPatient);
    }

    getConditionForPatient(idPatient: string) {
        return this.httpClient.get( this.urlConditionForPatient + idPatient);
    }

    postCondition(newCondition : any) {
      return this.httpClient.post(this.urlCondition, newCondition);
    }

    putCondition(newCondition: any) {
      return this.httpClient.put(this.urlCondition + newCondition.id, newCondition);
    }

    getPractitioner(idPractitioner: String){
      return this.httpClient.get(this.urlPractitioner + idPractitioner )
    }
}
