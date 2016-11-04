import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule
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
    RecommendationTableComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
