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
      <div style='float: left; margin-right: 40px;'>
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
  `,
  styles: ['.bar { width: 300px;}']
})
export class ValuePropComponent {
  constructor(private vpds: ValuePropDataService) { }

  ngOnInit() {
    let display = new ValuePropDisplay();
    let div = d3.select('#recentia');
    let div2 = d3.select('#competitor');
    display.showChartSimple({name: 'Recentia', value: 64, dollars: 580}, div);
    display.showAnimatedChart([
      {name: 'vendor01', value: 30, dollars: 500},
      {name: 'vendor02', value: 20, dollars: 495},
      {name: 'vendor03', value: 50, dollars: 540},
      {name: 'vendor04', value: 10, dollars: 490}
    ], div2);
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
