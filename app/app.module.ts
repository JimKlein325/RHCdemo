import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ChecklistComponent } from './checklist.component';
import { CaseManagementComponent } from './casemanagement.component';
import { HomeComponent } from './home.component';
import { RXDataComponent } from './rx-data.component';
import { ValuePropComponent } from './value-prop.component';
import { PatientSummaryComponent } from './patient-summary.component';
import { WellnessMeasuresComponent } from './wellness-measures.component';
import { RecommendationTableComponent } from './recommendation-table.component';
import { SelfAssessmentComponent } from './self-assessment.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule
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
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
