import { Component } from '@angular/core';
import { PatientSummaryComponent } from './patient-summary.component';
import { WellnessMeasuresComponent } from './wellness-measures.component';

@Component({
    moduleId: module.id,
    selector: 'checklist',
    template: `
        <patient-summary></patient-summary>
        <wellness-measures></wellness-measures>
        `
})


export class ChecklistComponent {

}