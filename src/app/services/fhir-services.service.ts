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
  private urlAppointment = "https://fhir.alliance4u.io/api/appointment"

    //Ressource patient
    getPatient(idPatient : string) {
      return this.httpClient.get(this.urlPatient + idPatient);
    }

    //Ressource condition
    getConditionForPatient(idPatient: string) {
        return this.httpClient.get( this.urlConditionForPatient + idPatient +"&recorder.display=Patient");
    }

    getConditionForPatientRDV(idPatient: string){
      return this.httpClient.get( this.urlConditionForPatient + idPatient +"&recorder.display=Practitioner");
    }

    postCondition(newCondition : any) {
      return this.httpClient.post(this.urlCondition, newCondition,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
    }

    putCondition(newCondition: any) {
      return this.httpClient.put(this.urlCondition + newCondition.id, newCondition,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
    }

    deleteCondition(idCondition:string){
      return this.httpClient.delete(this.urlCondition + idCondition);
    }
    
    //Ressource Practitioner
    getPractitioner(idPractitioner: String){
      return this.httpClient.get(this.urlPractitioner + idPractitioner )
    }

    //Ressource appointment
    postAppointment(newAppointment:any){
      return this.httpClient.post(this.urlAppointment,newAppointment,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })} )
    }


}