import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ValuePropDataService {
  private request: string;
  constructor(private http: Http) {
    this.request = 'mock-vp-data.json';
  }

  setRequest(newRequest: string) {
    this.request = newRequest;
  }

  getData() {
    return this.http.get(this.request);
  }

  getDollars(numCQMs: number) {
    return new Observable(function(o: any){
      o.next( Math.round(numCQMs/64*100+480) );
    });
  }
}
