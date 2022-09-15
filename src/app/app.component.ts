import { Component } from '@angular/core';
const urlEvent = "https://fhir.alliance4u.io/api/account/";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FPA';
}


function getEvent(idPatient:string){
  let result : any[]; 
  $.ajax(
    {
      type:"GET",
      url:urlEvent,
      contentType: 'application/json',
      dataType:"json",
      success:(data)=>{
        for(let d of data){
          if(d.subject.reference === idPatient && d.subject.type === "Patient"){
            result.push(d);
          }
        }
        return result;
      },
      error:(e)=>{
        console.log(e)
      }
    }
  )
}

function postEvent(newEvent:any){
  $.ajax(
    {
      type:"POST",
      url:urlEvent,
      contentType: 'application/json',
      data:JSON.stringify(newEvent),
      success:(data)=>{
        console.log("Envoi de l'événement réussi !");
        return data;
      },
      error:(e)=>{
        console.log(e)
      }
    }
  )

}

function putEvent(newEvent:any){
  $.ajax(
    {
      type:"PUT",
      url:urlEvent+newEvent.id,
      contentType: 'application/json',
      data:JSON.stringify(newEvent),
      success:(data)=>{
        console.log("Modification de l'événement réussi !");
        return data;
      },
      error:(e)=>{
        console.log(e)
      }
    }
  )
}

function postRDV(){

}

