import { Component, OnInit } from '@angular/core';
import { ValuePropDisplay } from './value-prop-display';
import * as d3 from 'd3';

@Component({
  selector: 'value-prop',
  template: `
    <div id='recentia' class='bar'></div>
    <br>
    <div id='competitor' class='bar'></div>
    <br>
    <self-assessment (onSubmit)='updateResults($event)'></self-assessment>
  `,
  styles: ['.bar { width: 300px; }']
})
export class ValuePropComponent {
  public assessmentResults: any;
  ngOnInit() {
    let display = new ValuePropDisplay();
    let div = d3.select('#recentia');
    let div2 = d3.select('#competitor');
    // display.showChartDetailed({
    //   'CQM01': {known: false, reported: true},
    //   'CQM02': {known: true, reported: false},
    //   'CQM03': {known: true, reported: true},
    //   'CQM04': {known: false, reported: false}
    // }, div);
    display.showChartSimple({name: 'Recentia', value: 64, dollars: 580}, div);
    display.showAnimatedChart([
      {name: 'vendor01', value: 30, dollars: 500},
      {name: 'vendor02', value: 20, dollars: 495},
      {name: 'vendor03', value: 50, dollars: 540},
      {name: 'vendor04', value: 10, dollars: 490}
    ], div2);
  }
  updateResults(results: any) {
    this.assessmentResults = results;
  }
}
