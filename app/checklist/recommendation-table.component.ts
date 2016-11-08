import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { RecommendationTableService } from './recommendation-table.service';

@Component({
    selector: 'recommendation-table',
    template: `
        <table>
            <tr>
                <th>Exclude</th>
                <th>Recommended Order</th>
                <th>Order By</th>
                <th>Problem</th>
                <th>Medicare CQM</th>
                <th>Clinical Guideline Publisher</th>
            </tr>
            <tr *ngFor="let datum of data">
                <td class='exc'><input type="checkbox"></td>
                <td><input type="checkbox" checked>{{datum.recOrder}}</td>
                <td>{{datum.orderByString}}</td>
                <td><a href="https://www.ncbi.nlm.nih.gov/pubmed/?term={{datum.problem}}">{{datum.problem}}</a></td>
                <td class='cqm'>{{datum.cqmName}}</td>
                <td class='cgp'>{{datum.guidelinePublisher}}</td>
            </tr>
        </table>
    `,
    providers: [RecommendationTableService]
})
export class RecommendationTableComponent implements OnInit {
    data: any[] = [];
    constructor(private recService: RecommendationTableService) {}
    ngOnInit(): void {
        this.recService.getRecommendations().then(function(recs){
            for(let i = 0; i < recs.length; i++) {
                recs[i].orderByString = moment(recs[i].orderBy).calendar(null, {
                    sameDay: '[Today]',
                    nextDay: '[Tomorrow]',
                    nextWeek: 'dddd',
                    lastDay: '[Yesterday]',
                    lastWeek: '[Last] dddd',
                    sameElse: 'DD/MM/YYYY'
                });
            }
            return Promise.resolve(recs);
        }).then(recs => this.data = recs);
        

    }
}