import { Component, OnInit, EventEmitter } from '@angular/core';
import { ValuePropDisplay } from './value-prop-display';
import * as d3 from 'd3';

@Component({
  selector: 'self-assessment',
  outputs: ['onSubmit'],
  template: `
    <div id='breakdown'></div>
    <br>
    <table>
      <tr>
        <th></th>
        <th>
          Reported by
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
        <td><input type='checkbox' [(ngModel)]='checkedCQMs[CQM.name].known' (click)='drawChart()'></td>
        <td>{{vendors[vendorIndex].reports.indexOf(CQM.name) != -1 ? 'yes' : 'no'}}</td>
        <td>{{CQM.name}}</td>
        <td>{{CQM.text}}</td>
      </tr>
    </table>
  `,
  styles: [ '#breakdown {width: 300px;}',
            'td, th {border: 1px solid gray; padding: 5px; text-align: center}',
            'table {border: 2px solid gray; border-collapse: collapse;}',
            'tr:nth-child(even) {background-color: lightgray}'
          ]
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
      {name: 'vendor03', reports: ['CQM01', 'CQM02', 'CQM03', 'CQM04']},
      {name: 'vendor04', reports: []}
    ];
    this.vendorIndex = 0;
    this.CQMs = [
      {name: 'CQM01', text: 'be sure to do the thing'},
      {name: 'CQM02', text: 'do all the things'},
      {name: 'CQM03', text: 'do not forget about the other thing'},
      {name: 'CQM04', text: 'did you do it?'}
    ];
    this.checkedCQMs = {};
    for (let CQM of this.CQMs) {
      this.checkedCQMs[CQM.name] = {known: false};
    }
    this.drawChart();
  }
  chooseVendor(vendorName: string) {
    for (let i = 0; i < this.vendors.length; i++) {
      if (this.vendors[i].name === vendorName) {
        this.vendorIndex = i;
        this.drawChart();
        return;
      }
    }
  }
  drawChart() {
    for (let CQM of this.CQMs) {
      this.checkedCQMs[CQM.name].reported = this.vendors[this.vendorIndex].reports.indexOf(CQM.name) !== -1;
    }
    let div = d3.select('#breakdown');
    let comp = this;
    window.setTimeout(function(){
      comp.display.showChartDetailed(comp.checkedCQMs, comp.vendors[comp.vendorIndex].name, div);
    }, 50);
  }

}
