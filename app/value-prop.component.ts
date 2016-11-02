import { Component, OnInit } from '@angular/core';
import { ValuePropDisplay } from './value-prop-display';
import * as d3 from 'd3';

@Component({
  selector: 'value-prop',
  template: `
    <div class='bar'></div>
  `,
  styles: ['.bar { height: 100px; }']
})
export class ValuePropComponent {
  constructor() {}
  ngOnInit() {
    let display = new ValuePropDisplay();
    let div = d3.select('.bar');
    display.showChartDetailed({
      'CQM01': {known: false, reported: true},
      'CQM02': {known: true, reported: false},
      'CQM03': {known: true, reported: true},
      'CQM04': {known: false, reported: false}
    }, div);
  }
}
