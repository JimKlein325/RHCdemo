import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaseManagementService {
    constructor(private http: Http){}
    
    getPatient(disease: any){
        this.http.get("https://example.com"+disease).toPromise()
        .then(response=>response.json());
    }
}
