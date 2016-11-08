import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpModule, JsonpModule  }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ChecklistComponent } from './checklist.component';
import { CaseManagementComponent } from './CaseManagement/casemanagement.component';
import { HomeComponent } from './home.component';
import { RXDataComponent } from './rx-data.component';
import { ValuePropComponent } from './value-prop.component';

import {CaseManagementService} from './CaseManagement/casemanagement.service';
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
    ValuePropComponent
    
   ],
   providers: [CaseManagementService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
