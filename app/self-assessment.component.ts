import { Component, OnInit, EventEmitter } from '@angular/core';
import { ValuePropDisplay } from './value-prop-display';
import * as d3 from 'd3';

@Component({
  selector: 'self-assessment',
  outputs: ['onBack'],
  template: `
    <h1>Self Assessment</h1>
    <div style='width: 300px; height: 330px; float: right; margin-left: 30px; margin-right: 30px;'>
      <div id='breakdown'></div>
      <p>There are a total of <span id='uncredited'>64</span> clinical quality measures for which you are not being credited.</p>
      <button (click)='back()'>Back</button>
    </div>
    <p>Check the box in the left column for any CQM that you will always remember.</p>
    <div style='max-height: 400px; overflow-y: scroll; border: 2px solid gray;'>
      <table>
        <tr>
          <th></th>
          <th>
            Reported by
            <select name='vendor' (change)='chooseVendor($event.target.value)'>
              <option value='{{vendor.name}}' *ngFor='let vendor of vendors' [selected]='vendors[vendorIndex].name === vendor.name ? true : null'>
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
    </div>
  `,
  styles: [ '#breakdown {width: 300px;}',
            'td, th {border: 1px solid gray; padding: 5px; text-align: center}',
            'table {border-collapse: collapse; width: 100%;}',
            'tr:nth-child(even) {background-color: lightgray}'
          ]
})
export class SelfAssessmentComponent {
  public vendors: any[];
  public CQMs: any[];
  public vendorIndex: number;
  public checkedCQMs: any;
  public onBack: EventEmitter<any>;
  private display: ValuePropDisplay;
  constructor() {
    this.onBack = new EventEmitter();
    this.display = new ValuePropDisplay();
  }
  ngOnInit() {
    this.vendors = [
      {name: 'vendor01', reports: ['CQM01', 'CQM02']},
      {name: 'vendor02', reports: ['CQM01']},
      {name: 'vendor03', reports: ['CQM01', 'CQM02', 'CQM03', 'CQM04']},
      {name: 'vendor04', reports: []}
    ];
    this.CQMs = [
      {name: 'CQM01', text: 'be sure to do the thing'},
      {name: 'CQM02', text: 'do all the things'},
      {name: 'CQM03', text: 'do not forget about the other thing'},
      {name: 'CQM04', text: 'did you do it?'},
      {name: 'CQM05', text: 'be sure to do the thing'},
      {name: 'CQM06', text: 'do all the things'},
      {name: 'CQM07', text: 'do not forget about the other thing'},
      {name: 'CQM08', text: 'did you do it?'},
      {name: 'CQM09', text: 'be sure to do the thing'},
      {name: 'CQM10', text: 'do all the things'},
      {name: 'CQM11', text: 'do not forget about the other thing'},
      {name: 'CQM12', text: 'did you do it?'}
    ];
    let checked = localStorage.getItem('checked');
    if(checked === null) {
      this.checkedCQMs = {};
      for (let CQM of this.CQMs) {
        this.checkedCQMs[CQM.name] = {known: false, reported: false};
      }
      localStorage.setItem('checked', JSON.stringify(this.checkedCQMs));
    } else {
      this.checkedCQMs = JSON.parse(checked);
    }
    let ven = localStorage.getItem('vendor');
    if(ven === null) {
      this.vendorIndex = 0;
      localStorage.setItem('vendor', '0');
    } else {
      this.vendorIndex = parseInt(ven);
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
      localStorage.setItem('vendor', comp.vendorIndex.toString())
      localStorage.setItem('checked', JSON.stringify(comp.checkedCQMs));
      comp.display.showChartDetailed(comp.checkedCQMs, comp.vendors[comp.vendorIndex].name, div);
    }, 50);
  }
  back() {
    this.onBack.emit();
  }

}
