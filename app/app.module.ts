import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ValuePropComponent }  from './value-prop.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ValuePropComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
