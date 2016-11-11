import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RxDataService } from './rx-data.service';
import {FormsModule} from "@angular/forms";
import { HttpModule, JsonpModule  }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// Imports for loading/configuring in-memory-web-api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryRxDataService }  from './in-memory-rxdata.service';
import { AppComponent }  from './app.component';
import { CaseManagementComponent } from './CaseManagement/casemanagement.component';
import {CaseManagementService} from './CaseManagement/casemanagement.service';
import { HomeComponent } from './home.component';
import { RXDataComponent } from './rx-data.component';
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

    ValuePropComponent,
    PatientSummaryComponent,
    WellnessMeasuresComponent,
    RecommendationTableComponent,
    SelfAssessmentComponent
   ],
   providers: [ RxDataService, CaseManagementService ],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }
