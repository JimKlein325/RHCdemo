import { Component, EventEmitter, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
    moduleId: module.id,
    
    selector: 'casemanagement',
    templateUrl: 'casemanagement.component.html'
    
})
export class CaseManagementComponent {
    
 getFormValue(disease: NgForm){
     
     console.log(disease.value);
 }
  
}