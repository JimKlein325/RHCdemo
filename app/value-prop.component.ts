import { Component, OnInit } from '@angular/core';
import { ValuePropDisplay } from './value-prop-display';
import { ValuePropDataService } from './value-prop-data.service';
import * as d3 from 'd3';

@Component({
  selector: 'value-prop',
  providers: [ValuePropDataService],
  template: `
    <div id='value-prop-main'>
      <h1>Value Proposition</h1>
      <h2>You could be losing the opportunity to earn up to $100,000.</h2>
      <div style='float: left; margin-right: 40px; margin-top: 20px;'>
        <p>How many CQMs do they report?</p>
        <div id='recentia' class='bar'></div>
        <br>
        <div id='competitor' class='bar'></div>
        <br>
      </div>
      <p style='margin-top: 40px;'>Physicians who perform well on Medicare's clinical quality measures over the next year will be earning as much as 100,000 dollars more than low performing physicians. How will your EMR help you fulfill these measures? Even the biggest vendors report on only a limited number of CQMs. Only Recentia provides you with full reporting as well as clinical decision support to help you ensure that all requirements are being met.</p>
      <p>How much will you benefit from Recentia's services? Take our short assessment and find out.</p>
      <button (click)='takeAssessment()'>Take Self-Assessment</button>
    </div>
    <div id='assessment' style='display: none;'>
      <self-assessment (onBack)='finishAssessment()'></self-assessment>
    </div>
  `
})
export class ValuePropComponent {
  constructor(private vpds: ValuePropDataService) { }

  ngOnInit() {
    let display = new ValuePropDisplay(this.vpds);
    let div = d3.select('#recentia');
    let div2 = d3.select('#competitor');
    let vendors: any[];
    let VPDS = this.vpds;
    this.vpds.getData().subscribe(function(r: any) {
      let data = r.json();
      let vendors = data.vendors;
      let numCQMs = data.cqms.length;
      display.showChartSimple({name: 'Recentia', value: numCQMs, dollars: 580}, div, numCQMs);
      let competitors: any[];
      competitors = [];
      for(let i=0; i<vendors.length; i++) {
        let val = vendors[i].reports.length;
        competitors.push({name: vendors[i].name, value: val, dollars: null});
        VPDS.getDollars(val).subscribe(function(r: number) {
          competitors[i]['dollars'] = r;
          if(i === vendors.length - 1) {
            display.showAnimatedChart(competitors, div2, 0, numCQMs);
          }
        });
      }
    });
  }
  takeAssessment() {
    d3.select('#value-prop-main').style('display', 'none');
    d3.select('#assessment').style('display', 'inline');
  }
  finishAssessment() {
    d3.select('#value-prop-main').style('display', 'inline');
    d3.select('#assessment').style('display', 'none');
  }
}
