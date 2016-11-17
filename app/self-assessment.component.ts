import { Component, OnInit, EventEmitter } from '@angular/core';
import { ValuePropDisplay } from './value-prop-display';
import { ValuePropDataService } from './value-prop-data.service';
import * as d3 from 'd3';

@Component({
  selector: 'self-assessment',
  providers: [ValuePropDataService],
  outputs: ['onBack'],
  template: `
    <h1>Self Assessment</h1>
    <div style='max-width: 1000px'>
      <div style='width: 300px; float: right; margin-left: 30px; margin-right: 30px;'>
        <div id='breakdown'></div>
        <p style='margin-top: 15px;'>There are a total of <span id='uncredited'>64</span>
          clinical quality measures for which you are not being credited. That could be worth up to
          <span id='dollar-value'>100</span> thousand dollars.
        </p>
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
    </div>
  `
})
export class SelfAssessmentComponent {
  public vendors: any[];
  public CQMs: any[];
  public vendorIndex: number;
  public checkedCQMs: any;
  public onBack: EventEmitter<any>;
  private display: ValuePropDisplay;

  constructor(private vpds: ValuePropDataService) {
    this.onBack = new EventEmitter();
    this.display = new ValuePropDisplay(this.vpds);
  }
  ngOnInit() {
    let ven = localStorage.getItem('vendor');
    if(ven === null) {
      this.vendorIndex = 0;
      localStorage.setItem('vendor', '0');
    } else {
      this.vendorIndex = parseInt(ven);
    }
    let c = this;
    this.vpds.getData().subscribe(function(response: any) {
      let data = response.json();
      c.vendors = data.vendors;
      c.CQMs = data.cqms;
      let checked = localStorage.getItem('checked');
      if(checked === null) {
        c.checkedCQMs = {};
        for (let CQM of c.CQMs) {
          c.checkedCQMs[CQM.name] = {known: false, reported: false};
        }
        localStorage.setItem('checked', JSON.stringify(this.checkedCQMs));
      } else {
        c.checkedCQMs = JSON.parse(checked);
      }
      c.drawChart();
    });
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
