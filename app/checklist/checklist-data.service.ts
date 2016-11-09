import { Injectable } from '@angular/core';

import { PATIENTSUM } from './mock-patient-summary';
import { RECOMMENDATIONS } from './mock-recommendations';
import { WELLNESSMEASURES } from './mock-wellness-measures';

@Injectable()
export class ChecklistDataService {
    getRecommendations(): Promise<any[]> {
        return Promise.resolve(RECOMMENDATIONS);
    }
    getPatientSum(): Promise<any> {
        return Promise.resolve(PATIENTSUM);
    }
    getWellnessMeasures(): Promise<any[]> {
        return Promise.resolve(WELLNESSMEASURES);
    }
}