import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ChecklistComponent } from './checklist.component';
import { CaseManagementComponent } from './casemanagement.component';
import { HomeComponent } from './home.component';
import { RXDataComponent } from './rx-data.component';
import { ValuePropComponent } from './value-prop.component';

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
    ValuePropComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
