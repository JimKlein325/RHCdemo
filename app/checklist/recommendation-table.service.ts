import { Injectable } from '@angular/core';

import { RECOMMENDATIONS } from './mock-recommendations';

@Injectable()
export class RecommendationTableService {
    getRecommendations(): Promise<any[]> {
        return Promise.resolve(RECOMMENDATIONS);
    }
}