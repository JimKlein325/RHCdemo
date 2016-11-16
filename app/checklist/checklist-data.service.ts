import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChecklistDataService {
    constructor(private http: Http) {}
    private wellnessMeasuresUrl = 'http://localhost:62122/api/mockdata/wellnessmeasures';
    private recommendationsUrl = 'http://localhost:62122/api/mockdata/recommendations';
    private patientSumUrl = 'http://localhost:62122/api/mockdata/patientsum';



    private handleError(error: any): Promise<any> {
        console.error('an error occurred', error);
        return Promise.reject(error.message || error);
    }

    getRecommendations(): Promise<any[]> {
        return this.http.get('http://localhost:62122/api/mockdata/recommendations')
        .toPromise()
        .then(response => response.json().data as any[])
        .catch(this.handleError);
    }
    getPatientSum(): Promise<any> {
        return this.http.get('http://localhost:62122/api/mockdata/patientsum')
        .toPromise()
        .then(response => response.json().data as any)
        .catch(this.handleError);
    }
    getWellnessMeasures(): Promise<any[]> {
        return this.http.get('http://localhost:62122/api/mockdata/wellnessmeasures')
        .toPromise()
        .then(response => response.json().data as any[])
        .catch(this.handleError);
    }
}