import {Pipe, PipeTransform} from '@angular/core';
import {RxRecord} from './rx-record.model';

@Pipe({
  name: "rxDataFilter",
  pure: false
})
export class RxDataFilterPipe implements PipeTransform {
  transform(input: RxRecord[], modality: string, option: string): RxRecord[] {
    var filterModality = modality;
    var filterOption = option;
    var output: RxRecord[] = [];

    console.log("transform: filterMod: " + filterModality);
    console.log("transform: filterOpt: " + filterOption);

    switch(filterModality) {
      case "state":
        for(let record of input) {
          if (record.state === filterOption) {
            output.push(record);
          }
        }
        break;

      case "city":
        for(let record of input) {
          if (record.city === filterOption) {
            output.push(record);
          }
        }
        break;

      case "zip":
        for(let record of input) {
          if (record.zip === Number(filterOption)) {
            output.push(record);
          }
        }
        break;

        case "":
          output = input;
      }
    return output;
  }
}
