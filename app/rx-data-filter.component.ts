import { Component, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rx-data-filter',
  template: `
  <h4>Filter Data By...</h4>
  <form (ngSubmit)="setFilterOptions()">
    <div class='row'>
      <div class='col-sm-1'>
        <select #modality >
          <option value="" selected="selected"></option>
          <option value="state">State</option>
          <option value="city">City</option>
          <option value="zip">Zip Code</option>
        </select>
      </div>
      <div class='col-sm-3'>
        <input type="text" style="width: 100%" placeholder="Enter text..." #option>
      </div>
      <div class='col-sm-2'>
        <input type='submit'>
      </div>
    </div>
  </form>
  `
})

export class RxDataFilter {

  public modality: string = "";
  public option: string   = "";

  setFilterOptions(modality: string, option: string): void {
    this.modality = modality;
    this.option = option;
  }

}
