import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RxRecord } from './rx-record.model';
// import { RXDATA } from './mock-rx-data';

@Injectable()
export class RxDataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private rxdataUrl = 'app/rxdata';

  constructor(private http: Http) { }

  getRxData(): Promise<RxRecord[]> {
    /* promise / pre-http service -- working  */
    // return Promise.resolve(RXDATA);

    return this.http.get(this.rxdataUrl)
               .toPromise()
               .then(response => response.json().data as RxRecord[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error: ' + error.status + " : " + error.statusText , error);
    return Promise.reject(error.message || error);
  }
}
