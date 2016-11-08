import { Component, OnInit } from '@angular/core';
import { RxRecord } from './rx-record.model';
import { RxDataService } from './rx-data.service';

@Component({
    moduleId: module.id,
    selector: 'rx-data',
    template: `
      <h1>{{title}}</h1>

      <h3>Drug Class: <span class='drugClass'>Oncologics</span></h3>

      <ul class='rx-tabular'>
        <li *ngFor='let record of rxdata'>
          {{record.rxName}}, {{record.ptId}}, {{record.drId}}, {{record.state}}, {{record.city}}, {{record.zip}}
        </li>
      </ul>
    `,
    providers: [RxDataService]
})
export class RXDataComponent implements OnInit {
  title = 'RX Data Component';
  rxdata: RxRecord[];

  constructor(private rxDataService: RxDataService) {}

  ngOnInit(): void {
    this.getRxData();
  }

  /* service - pre-promise -- working */
  // getRxData(): void {
    // this.rxdata = this.rxDataService.getRxData();
    // }

  /* service w/promise */
  getRxData(): void {
    this.rxDataService.getRxData().then(rxdata => this.rxdata = rxdata);
  }

}
