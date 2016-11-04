import { Component } from '@angular/core';
import { PatientSummaryComponent } from './patient-summary.component';
import { WellnessMeasuresComponent } from './wellness-measures.component';
import { RecommendationTableComponent } from './recommendation-table.component';

@Component({
    moduleId: module.id,
    selector: 'checklist',
    template: `
        <patient-summary></patient-summary>
        <hr>
        <wellness-measures></wellness-measures>
        <hr>
        <recommendation-table></recommendation-table>
        `
})


export class ChecklistComponent {

}