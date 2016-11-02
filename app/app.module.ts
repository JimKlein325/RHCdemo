import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ChecklistComponent } from './checklist.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    AppRoutingModule
     ],
  declarations: [ AppComponent,
  ChecklistComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
