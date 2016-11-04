import {NgModule} from '@angular/core';
import { HttpModule }    from '@angular/http';
import {FormsModule} from "@angular/forms";
import {CaseManagementComponent} from './casemanagement.component';

@NgModule({
    imports: [HttpModule, FormsModule],
    declarations: [CaseManagementComponent],
    
})

export class CaseManagementModule{}