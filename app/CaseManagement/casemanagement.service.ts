import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Patient} from './patient';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaseManagementService {
    
    
    constructor(private http: Http){}
    
    //using test api; needs to be updated when the api call to get Patient info is ready. and the newPatient should be updated according to the model.

     getPatient(disease:any){   
        var patientList:any= [];
        this.http.get("http://congress.api.sunlightfoundation.com/legislators/locate?apikey=574d4a17eab649a3ab73359ddf16a885&zip="+disease).toPromise()
        .then(function(response) {
           var list = response.json().results;
           if(list){
            for(var i =0; i<list.length; i++){
               var newPatient = new Patient();
               newPatient.name =list[i].first_name;
               newPatient.address = list[i].office;
               newPatient.phoneNumber = list[i].phone;
               newPatient.physician = list[i].last_name;
               patientList.push(newPatient); 
           }
        }    
     }); 
     return patientList;
    }
}
