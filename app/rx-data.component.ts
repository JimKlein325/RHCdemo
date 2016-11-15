import { Component, OnInit } from '@angular/core';
import { RxRecord }          from './rx-record.model';
import { RxDataService }     from './rx-data.service';
import { RxDataFilterPipe }  from './rx-data-filter.pipe';

@Component({
    moduleId: module.id,
    selector: 'rx-data',
    template: `
      <h1>{{title}}</h1>

      <h3>Drug Class: <span class='drugClass'>Oncologics</span></h3>

      <h4>Filter Data By...</h4>
      <form  #filterOptionsForm="ngForm">
        <div class='row'>
          <div class='col-sm-2'>
            <select #modality style="width: 100%">
              <option value="" selected="selected"></option>
              <option value="state">State</option>
              <option value="city">City</option>
              <option value="zip">Zip Code</option>
            </select>
          </div>
          <div class='col-sm-4'>
            <input type="text" style="width: 100%" placeholder="Enter text..." #option>
          </div>
          <div class='col-sm-2'>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>


      <br>

      <ul class='rx-tabular'>
        <li *ngFor='let record of rxdata | rxDataFilter:modality.value:option.value'>
          {{record.rxName}}, {{record.ptId}}, {{record.drId}}, {{record.state}}, {{record.city}}, {{record.zip}}
        </li>
      </ul>
    `,
    providers: [RxDataService]

})
export class RXDataComponent implements OnInit {
  title = 'RX Data Component';
  rxdata: RxRecord[];
  filterModality: string = '';
  filterOption: string = '';


  constructor(private rxDataService: RxDataService) {}

  ngOnInit(): void {
    this.getRxData();
  }

  /* service - pre-promise -- working */
  // getRxData(): void { this.rxdata = this.rxDataService.getRxData(); }

  /* service w/promise */
  getRxData(): void {
    this.rxDataService.getRxData().then(rxdata => this.rxdata = rxdata);
  }

}
