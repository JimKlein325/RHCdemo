import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DoseResponseDataService {
  private request: string;
  constructor(private http: Http) {
    this.request = 'mock-dr-data.json';
  }

  setRequest(newRequest: string) {
    this.request = newRequest;
  }

  getData() {
    return this.http.get(this.request);
  }

  transformData(rawData: any) {
    let data: any[];
    data = [];

    for(let i=0; i<rawData.length; i++) {
      let name = rawData[i].ClinicalEvent;
      let dataset = data.find(function(event: any){ return event.name === name; });
      if(dataset === undefined) {
        dataset = {name: name, values: []};
        data.push(dataset);
      }
      let dataPoint = [rawData[i].EventDate, rawData[i].ClinicalValue];
      dataset.values.push(dataPoint);
      dataset.unit = rawData[i].Units;
      dataset.refMin = rawData[i].ReferenceRangeMin;
      dataset.refMax = rawData[i].ReferenceRangeMax;
    }

    return {title: "Lab Values for Patient " + rawData[0].PatientID, data: data};
  }
}
