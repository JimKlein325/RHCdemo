import { Injectable } from '@angular/core';

import { RxRecord } from './rx-record.model';
import { RXDATA } from './mock-rx-data';

@Injectable()
export class RxDataService {
  getRxData(): Promise<RxRecord[]> {
    return Promise.resolve(RXDATA);
  }
}
