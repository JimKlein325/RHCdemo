import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaseManagementService {
    constructor(private http: Http){}
    
    getPatient(disease: any){
        this.http.get("http://congress.api.sunlightfoundation.com/legislators/locate?apikey=574d4a17eab649a3ab73359ddf16a885&zip="+disease).toPromise()
        .then(function(responseJSON) {
            return console.log(responseJSON);
        });
        
    }
}
