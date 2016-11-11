import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule }   from '@angular/forms';
import { RxDataService } from './rx-data.service';
import { HttpModule }    from '@angular/http';

=======
import {FormsModule} from "@angular/forms";
import { HttpModule, JsonpModule  }    from '@angular/http';
>>>>>>> casemanagement
import { AppRoutingModule } from './app-routing.module';

// Imports for loading/configuring in-memory-web-api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryRxDataService }  from './in-memory-rxdata.service';

import { AppComponent }  from './app.component';
<<<<<<< HEAD
import { CaseManagementComponent } from './casemanagement.component';
=======
import { ChecklistComponent } from './checklist.component';
import { CaseManagementComponent } from './CaseManagement/casemanagement.component';
>>>>>>> casemanagement
import { HomeComponent } from './home.component';
import { RXDataComponent } from './rx-data.component';
import { ValuePropComponent } from './value-prop.component';

<<<<<<< HEAD
import { ChecklistComponent } from './checklist/checklist.component';
import { PatientSummaryComponent } from './checklist/patient-summary.component';
import { WellnessMeasuresComponent } from './checklist/wellness-measures.component';
import { RecommendationTableComponent } from './checklist/recommendation-table.component';

import { SelfAssessmentComponent } from './self-assessment.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryRxDataService)
=======
import {CaseManagementService} from './CaseManagement/casemanagement.service';
@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule 
>>>>>>> casemanagement
     ],
  declarations: [
    AppComponent,
    ChecklistComponent,
    CaseManagementComponent,
    HomeComponent,
    RXDataComponent,
<<<<<<< HEAD
    ValuePropComponent,
    PatientSummaryComponent,
    WellnessMeasuresComponent,
    RecommendationTableComponent,
    SelfAssessmentComponent
   ],
   providers: [ RxDataService ],
   bootstrap:    [ AppComponent ]
=======
    ValuePropComponent
    
   ],
   providers: [CaseManagementService],
  bootstrap:    [ AppComponent ]
>>>>>>> casemanagement
})
export class AppModule { }
