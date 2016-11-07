import { Component, EventEmitter, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CaseManagementService} from './casemanagement.service'
@Component({
    moduleId: module.id,
    providers: [CaseManagementService],
    selector: 'casemanagement',
    templateUrl: 'casemanagement.component.html'
    
})
export class CaseManagementComponent {
    
    constructor(private casemanagementservice: CaseManagementService) {}
    getDiseaseInput(disease: NgForm){
        var inputDisease = disease.value;
        this.casemanagementservice.getPatient(inputDisease);
    };
  
}