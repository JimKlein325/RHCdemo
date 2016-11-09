import { Component, OnInit } from '@angular/core';

import { ChecklistDataService } from './checklist-data.service';

@Component({
    moduleId: module.id,
    selector: 'patient-summary',
    template: `
        <h1>{{patientSum.physicianName}}</h1>
        <p><strong>{{patientSum.patientName}}</strong>, {{patientSum.sumText}}</p>
    `,
    providers: [ ChecklistDataService ]
})


export class PatientSummaryComponent implements OnInit {
    constructor(private checklistDataService: ChecklistDataService) {}
    patientSum = {};
    ngOnInit(): void {
        this.checklistDataService.getPatientSum().then(ps => this.patientSum = ps);
    }
}