import { Component, OnInit, EventEmitter } from '@angular/core';
import { ValuePropDisplay } from './value-prop-display';
import * as d3 from 'd3';

@Component({
  selector: 'self-assessment',
  outputs: ['onSubmit'],
  template: `
    <div id='breakdown' style='width: 300px; height: 70px;'></div>
    <table>
      <tr>
        <th></th>
        <th>
          <select name='vendor' (change)='chooseVendor($event.target.value)'>
            <option value='{{vendor.name}}' *ngFor='let vendor of vendors'>
              {{vendor.name}}
            </option>
          </select>
        </th>
        <th>Measure Code</th>
        <th>Measure</th>
      </tr>
      <tr *ngFor='let CQM of CQMs'>
        <td><input type='checkbox' [(ngModel)]='checkedCQMs[CQM.name].known'></td>
        <td>{{vendors[vendorIndex].reports.indexOf(CQM.name) != -1 ? 'yes' : 'no'}}</td>
        <td>{{CQM.name}}</td>
        <td>{{CQM.text}}</td>
      </tr>
    </table>
    <button (click)='submit()' >Submit</button>
  `
})
export class SelfAssessmentComponent {
  public vendors: any[];
  public CQMs: any[];
  public vendorIndex: number;
  public checkedCQMs: any;
  public onSubmit: EventEmitter<any>;
  private display: ValuePropDisplay;
  constructor() {
    this.onSubmit = new EventEmitter();
    this.display = new ValuePropDisplay();
  }
  ngOnInit() {
    this.vendors = [
      {name: 'vendor01', reports: ['CQM01', 'CQM02']},
      {name: 'vendor02', reports: ['CQM01']},
    ];
    this.vendorIndex = 0;
    this.CQMs = [
      {name: 'CQM01', text: 'be sure to do the thing'},
      {name: 'CQM02', text: 'do all the things'}
    ];
    this.checkedCQMs = {};
    for (let CQM of this.CQMs) {
      this.checkedCQMs[CQM.name] = {known: false};
    }
  }
  chooseVendor(vendorName: string) {
    for (let i = 0; i < this.vendors.length; i++) {
      if (this.vendors[i].name === vendorName) {
        this.vendorIndex = i;
        return;
      }
    }
  }
  submit() {
    for (let CQM of this.CQMs) {
      this.checkedCQMs[CQM.name].reported = this.vendors[this.vendorIndex].reports.indexOf(CQM.name) !== -1;
    }
    console.log(this.checkedCQMs);
    let div = d3.select('#breakdown');
    this.display.showChartDetailed(this.checkedCQMs, div);
  }

}
