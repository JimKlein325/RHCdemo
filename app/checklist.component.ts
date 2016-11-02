import { Component } from '@angular/core';
import { PatientSummaryComponent } from './patient-summary.component';

@Component({
    moduleId: module.id,
    selector: 'checklist',
    template: '<patient-summary></patient-summary>'
})


export class ChecklistComponent {
    patientSum = {
        physicianName: "Marcus Welby, MD",
        patientName: "Carli Jones",
        sumText: "65 year old Hispanic female married retired bank executive with h/o DM II, CKD, CHF, CAD, Asthma, s/p stent placement x3 in 2010"
    }
}