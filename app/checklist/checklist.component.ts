import { Component } from '@angular/core';
import { PatientSummaryComponent } from './patient-summary.component';
import { WellnessMeasuresComponent } from './wellness-measures.component';
import { RecommendationTableComponent } from './recommendation-table.component';

@Component({
    moduleId: module.id,
    selector: 'checklist',
    template: `
        <div class="row">
            <patient-summary class="col-md-6"></patient-summary>
            <wellness-measures class="col-md-6"></wellness-measures>
        </div>
        <hr>
        <div class = "row">
            <recommendation-table></recommendation-table>
        </div>
        `
})


export class ChecklistComponent {

}