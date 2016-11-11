import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChecklistDataService {
    constructor(private http: Http) {}
    private wellnessMeasuresUrl = 'app/wellnessMeasures';
    private recommendationsUrl = 'app/recommendations';
    private patientSumUrl = 'app/patientSum';



    private handleError(error: any): Promise<any> {
        console.error('an error occurred', error);
        return Promise.reject(error.message || error);
    }

    getRecommendations(): Promise<any[]> {
        return this.http.get(this.recommendationsUrl)
        .toPromise()
        .then(response => response.json().data as any[])
        .catch(this.handleError);
    }
    getPatientSum(): Promise<any> {
        return this.http.get(this.patientSumUrl)
        .toPromise()
        .then(response => response.json().data as any)
        .catch(this.handleError);
    }
    getWellnessMeasures(): Promise<any[]> {
        return this.http.get(this.wellnessMeasuresUrl)
        .toPromise()
        .then(response => response.json().data as any[])
        .catch(this.handleError);
    }
}