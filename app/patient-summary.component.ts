import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'patient-summary',
    template: `
        <h1>{{patientSum.physicianName}}</h1>
        <p><strong>{{patientSum.patientName}}</strong>, {{patientSum.sumText}}</p>
        <hr />
    `
})


export class PatientSummaryComponent {
    patientSum = {
        physicianName: "Marcus Welby, MD",
        patientName: "Carli Jones",
        sumText: "65 year old Hispanic female married retired bank executive with h/o DM II, CKD, CHF, CAD, Asthma, s/p stent placement x3 in 2010"
    }
}