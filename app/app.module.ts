import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RxDataService } from './rx-data.service';
import { RxDataFilter }  from './rx-data-filter.component';

import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule  }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
// Imports for loading/configuring in-memory-web-api

import { AppComponent }  from './app.component';
import { CaseManagementComponent } from './CaseManagement/casemanagement.component';
import { CaseManagementService } from './CaseManagement/casemanagement.service';
import { HomeComponent } from './home.component';
import { RXDataComponent } from './rx-data.component';
import { RxDataFilterPipe }      from './rx-data-filter.pipe';
import { ValuePropComponent } from './value-prop.component';
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
    JsonpModule
     ],
  declarations: [
    AppComponent,
    ChecklistComponent,
    CaseManagementComponent,
    HomeComponent,
    RXDataComponent,
    RxDataFilterPipe,
    ValuePropComponent,
    PatientSummaryComponent,
    WellnessMeasuresComponent,
    RecommendationTableComponent,
    SelfAssessmentComponent,
    RxDataFilterPipe
   ],
   providers: [ RxDataService, CaseManagementService ],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }
