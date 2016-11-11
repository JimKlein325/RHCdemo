import { Injectable } from '@angular/core';
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
}
