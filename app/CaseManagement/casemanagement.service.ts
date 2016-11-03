import {Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import {Disease} from './disease';
import {Patient} from './patient';

@Injectable()
export class CaseManagementService {
    getPatients(disease: HTMLInputElement){
        return this.http.get("url").map(response => response.json().data as Patient[]);
    }
}