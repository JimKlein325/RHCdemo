import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class MockValuePropDataService {
  private request: string;
  constructor(private http: Http) {
    this.request = 'mock-vp-data.json';
  }

  setRequest(newRequest: string) {
    this.request = newRequest;
  }

  getData() {
    return new Observable(function(o: any){
      o.next({
        json: function(){return this.content; },
        content: {
          "CQMs": [
            {
              "name": "CMS2",
              "text": "Preventive Care and Screening: Screening for Clinical Depression and Follow-Up Plan"
            },
            {
              "name": "CMS61",
              "text": "Preventive Care and Screening: Cholesterol - Fasting Low Density Lipoprotein (LDL-C) Test Performed"
            },
            {
              "name": "CMS68",
              "text": "Documentation of Current Medications in the Medical Record"
            },
            {
              "name": "CMS69",
              "text": "Preventive Care and Screening: Body Mass Index (BMI) Screening and Follow-Up Plan"
            },
            {
              "name": "CMS74",
              "text": "Primary Caries Prevention Intervention as Offered by Primary Care Providers, including Dentists"
            },
            {
              "name": "CMS75",
              "text": "Children Who Have Dental Decay or Cavities"
            },
            {
              "name": "CMS117",
              "text": "Childhood Immunization Status"
            },
            {
              "name": "CMS122",
              "text": "Diabetes Hemoglobin A1c Poor Control"
            }
          ],
          "vendors": [
            {
              "name": "Vendor00",
              "reports": ["CMS74", "CMS75", "CMS122"]
            },
            {
              "name": "Vendor01",
              "reports": ["CMS74", "CMS75", "CMS117", "CMS122"]
            },
            {
              "name": "Vendor02",
              "reports": ["CMS69", "CMS69"]
            },
            {
              "name": "Vendor03",
              "reports": ["CMS2"]
            },
            {
              "name": "Vendor04",
              "reports": []
            }
          ]
        }
      });
    });

  }
}
