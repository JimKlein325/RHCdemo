import { Component, OnInit } from '@angular/core';
import { RxRecord } from './rx-record.model';
import { RxDataService } from './rx-data.service';

@Component({
    moduleId: module.id,
    selector: 'rx-data',
    template: `
      <h1>{{title}}</h1>

      <h3>Drug Class: <span class='drugClass'>{{rxdata[0].rxClass}}</span></h3>

      <ul class='rx-tabular'>
        <li *ngFor='let record of rxdata'>
        {{record.rxName}}, {{record.ptId}}, {{record.drId}}, {{record.state}}, {{record.city}}, {{record.zip}}
    `,
    styles: [`
      .rx-tabular {
        list-style-type: none;
      }
      .drugClass {
        color: steelblue;
      }
    `],
    providers: [RxDataService]
})
export class RXDataComponent implements OnInit {
  title = 'RX Data Component';
  rxdata: RxRecord[];

  constructor(private rxDataService: RxDataService) {}

  ngOnInit(): void {
    this.getRxData();
  }

  getRxData(): void {
    this.rxdata = this.rxDataService.getRxData();
  }

}
