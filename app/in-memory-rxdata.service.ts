import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryRxDataService implements InMemoryDbService {
  createDb() {
    let rxdata = [
      {rxClass: 'oncologics', rxName: 'drug_01', ptId: 1, ptName: 'Billy Dill', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98101},
      {rxClass: 'oncologics', rxName: 'drug_01', ptId: 2, ptName: 'Janey Eire', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98101},
      {rxClass: 'oncologics', rxName: 'drug_01', ptId: 3, ptName: 'Joann Arck', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98101},
      {rxClass: 'oncologics', rxName: 'drug_02', ptId: 4, ptName: 'Betty Boop', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98101},
      {rxClass: 'oncologics', rxName: 'drug_05', ptId: 5, ptName: 'Jack Flack', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98101},
      {rxClass: 'oncologics', rxName: 'drug_02', ptId: 6, ptName: 'Fred Frown', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98101},
      {rxClass: 'oncologics', rxName: 'drug_02', ptId: 7, ptName: 'Fran Flann', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98101},
      {rxClass: 'oncologics', rxName: 'drug_03', ptId: 8, ptName: 'Jack Fruit', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98111},
      {rxClass: 'oncologics', rxName: 'drug_03', ptId: 9, ptName: 'Sean Sunny', drId: 1, drName: 'Dr. Jones', state: 'WA', city: 'Seattle', zip: 98111},
      {rxClass: 'oncologics', rxName: 'drug_04', ptId: 10, ptName: 'Joey Dowey', drId: 2, drName: 'Dr. John', state: 'WA', city: 'Seattle', zip: 98121},
      {rxClass: 'oncologics', rxName: 'drug_04', ptId: 11, ptName: 'Sven Swans', drId: 2, drName: 'Dr. John', state: 'WA', city: 'Seattle', zip: 98121},
      {rxClass: 'oncologics', rxName: 'drug_04', ptId: 12, ptName: 'Lucy Bling', drId: 2, drName: 'Dr. John', state: 'WA', city: 'Seattle', zip: 98121},
      {rxClass: 'oncologics', rxName: 'drug_03', ptId: 13, ptName: 'Liz Borden', drId: 2, drName: 'Dr. John', state: 'WA', city: 'Redmond', zip: 98052},
      {rxClass: 'oncologics', rxName: 'drug_01', ptId: 14, ptName: 'Enzo Grima', drId: 2, drName: 'Dr. John', state: 'WA', city: 'Redmond', zip: 98052},
      {rxClass: 'oncologics', rxName: 'drug_01', ptId: 15, ptName: 'Bambam Boom', drId: 3, drName: 'Dr. Smith', state: 'OR', city: 'Salem', zip: 97301},
      {rxClass: 'oncologics', rxName: 'drug_05', ptId: 16, ptName: 'Barny Frank', drId: 3, drName: 'Dr. Smith', state: 'OR', city: 'Salem', zip: 97301},
      {rxClass: 'oncologics', rxName: 'drug_01', ptId: 17, ptName: 'Fran Frolic', drId: 4, drName: 'Dr. Khann', state: 'OR', city: 'Portland', zip: 97201},
      {rxClass: 'oncologics', rxName: 'drug_04', ptId: 18, ptName: 'Jenny Linds', drId: 4, drName: 'Dr. Khann', state: 'OR', city: 'Portland', zip: 97201},
      {rxClass: 'oncologics', rxName: 'drug_03', ptId: 19, ptName: 'Linser Tort', drId: 4, drName: 'Dr. Khann', state: 'OR', city: 'Portland', zip: 97222},
      {rxClass: 'oncologics', rxName: 'drug_05', ptId: 20, ptName: 'Ginger Rows', drId: 4, drName: 'Dr. Khann', state: 'OR', city: 'Portland', zip: 97222},
      {rxClass: 'oncologics', rxName: 'drug_05', ptId: 21, ptName: 'Willy Silly', drId: 4, drName: 'Dr. Khann', state: 'OR', city: 'Portland', zip: 97222}
    ];
    return {rxdata};
  }
}
