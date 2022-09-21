import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FhirServicesService {

  constructor(private httpClient : HttpClient) { }

    getPatient(idPatient : string) {
      return this.httpClient.get('https://fhir.alliance4u.io/api/patient/' + idPatient);
    }

    getConditionForPatient(idPatient: string) {
        return this.httpClient.get('https://fhir.alliance4u.io/api/condition?subject.reference=Patient/' + idPatient);
    }

    postCondition(newCondition : any) {
      return this.httpClient.post('https://fhir.alliance4u.io/api/condition', newCondition);
    }

    putCondition(newCondition: any) {
      return this.httpClient.put('https://fhir.alliance4u.io/api/condition' + newCondition.id, newCondition);
    }
}
