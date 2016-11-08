import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

import {CaseManagementService} from './casemanagement.service';
import {Patient} from './patient';
@Component({
    moduleId: module.id,
    providers: [CaseManagementService],
    inputs: ['patientList'],
    selector: 'casemanagement',
    templateUrl: 'casemanagement.component.html'
    
})
export class CaseManagementComponent {
    
    public patientList: Patient[];
    constructor(private casemanagementservice: CaseManagementService) {}
    getDiseaseInput(disease: NgForm){
       var inputDisease = disease.value;  
       this.patientList = this.casemanagementservice.getPatient(inputDisease);
    };
    
        
  
}