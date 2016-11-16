import {Injectable} from '@angular/core';
import { Headers, Http, Jsonp,Response } from '@angular/http';
import {Patient} from './patient';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaseManagementService {
    
    
    constructor(private http: Http){}
    
    //using test api; needs to be updated when the api call to get Patient info is ready. and the newPatient should be updated according to the model.

     getPatient(disease:any){  
       
        var list:any=[];
        var patientList:any= [];
        this.http.get("http://localhost:62122/api/mockdata/"+disease).toPromise()
        .then(function(response)
        {
           var patient = response.json();
           list.push(patient);
           if(list){
            for(var i =0; i<list.length; i++){
               var newPatient = new Patient();
               newPatient.physicianName =list[i].physicianName;
               newPatient.patientName = list[i].patientName;
               newPatient.sumText = list[i].sumText;
               patientList.push(newPatient); 
           }
        }    
     }).catch(this.handleError); 
     return patientList;
    }
  private handleError (error: Response) {
 
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } 
  console.error(errMsg);
  return Promise.reject(errMsg);
}
}
