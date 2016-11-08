import { Injectable } from '@angular/core';

import { RECOMMENDATIONS } from './mock-recommendations';

@Injectable()
export class ChecklistDataService {
    getRecommendations(): Promise<any[]> {
        return Promise.resolve(RECOMMENDATIONS);
    }
}