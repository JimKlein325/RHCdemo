/* tslint:disable:no-unused-variable */
import { MockValuePropDataService } from './mock-value-prop-data.service';
import { ValuePropDataService } from './value-prop-data.service';
import { ValuePropComponent } from './value-prop.component';
import { SelfAssessmentComponent } from './self-assessment.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import * as d3 from 'd3';
import { TestBed }      from '@angular/core/testing';

import { By }           from '@angular/platform-browser';

////////  SPECS  /////////////

describe('ValuePropComponent', function () {
  let fixture: any;
  let component: any;
  beforeEach((done: any) => {
    TestBed.configureTestingModule({
      declarations: [ValuePropComponent, SelfAssessmentComponent],
      providers: [MockValuePropDataService],
      imports: [AppRoutingModule, RouterModule, RouterTestingModule]
    });
    TestBed.overrideComponent(ValuePropComponent, {
      set: {
        providers: [
          { provide: ValuePropDataService, useClass: MockValuePropDataService }
        ]
      }
    });
    fixture = TestBed.createComponent(ValuePropComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    setTimeout(function(){
      done();
    }, 200);
  });

  it('should instantiate component', () => {
    expect(component instanceof ValuePropComponent).toBe(true, 'should create ValuePropComponent');
  });

});
