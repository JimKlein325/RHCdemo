import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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
                <td><input type="checkbox"></td>
                <td><input type="checkbox" checked>{{datum.recOrder}}</td>
                <td>{{datum.orderByString}}</td>
                <td><a href={{datum.problemUrl}}>{{datum.problem}}</a></td>
                <td>{{datum.cqmName}}</td>
                <td>{{datum.guidelinePublisher}}</td>
            </tr>
        </table>
    `
})
export class RecommendationTableComponent implements OnInit {
    data = [
        {
            recOrder: "Hemoblobin A1C",
            orderBy: Date.parse("June 15, 2016"),
            orderByString: "",
            problem: "Diabetes mellitus II",
            //We will talk later about how to implement
            //the dynamic routing in the problemUrl
            cqmName: "CMS122",
            cqmUrl: "",
            guidelinePublisher: "CMS",
            guidelinePublisherUrl: ""
        },
        {
            recOrder: "Hemoblobin A1C",
            orderBy: Date.parse("June 15, 2016"),
            orderByString: "",
            problem: "Diabetes mellitus II",
            //We will talk later about how to implement
            //the dynamic routing in the problemUrl
            cqmName: "CMS122",
            cqmUrl: "",
            guidelinePublisher: "CMS",
            guidelinePublisherUrl: ""
        },
        {
            recOrder: "Hemoblobin A1C",
            orderBy: Date.parse("June 15, 2016"),
            orderByString: "",
            problem: "Diabetes mellitus II",
            //We will talk later about how to implement
            //the dynamic routing in the problemUrl
            cqmName: "CMS122",
            cqmUrl: "",
            guidelinePublisher: "CMS",
            guidelinePublisherUrl: ""
        },
        {
            recOrder: "Hemoblobin A1C",
            orderBy: Date.parse("June 15, 2016"),
            orderByString: "",
            problem: "Diabetes mellitus II",
            //We will talk later about how to implement
            //the dynamic routing in the problemUrl
            cqmName: "CMS122",
            cqmUrl: "",
            guidelinePublisher: "CMS",
            guidelinePublisherUrl: ""
        },
        {
            recOrder: "Hemoblobin A1C",
            orderBy: Date.parse("June 15, 2016"),
            orderByString: "",
            problem: "Diabetes mellitus II",
            //We will talk later about how to implement
            //the dynamic routing in the problemUrl
            cqmName: "CMS122",
            cqmUrl: "",
            guidelinePublisher: "CMS",
            guidelinePublisherUrl: ""
        },
        {
            recOrder: "Hemoblobin A1C",
            orderBy: Date.parse("November 7, 2016"),
            orderByString: "",
            problem: "Diabetes mellitus II",
            //We will talk later about how to implement
            //the dynamic routing in the problemUrl
            cqmName: "CMS122",
            cqmUrl: "",
            guidelinePublisher: "CMS",
            guidelinePublisherUrl: ""
        },
        {
            recOrder: "Hemoblobin A1C",
            orderBy: Date.parse("June 15, 2016"),
            orderByString: "",
            problem: "Diabetes mellitus II",
            //We will talk later about how to implement
            //the dynamic routing in the problemUrl
            cqmName: "CMS122",
            cqmUrl: "",
            guidelinePublisher: "CMS",
            guidelinePublisherUrl: ""
        },
    ]

    ngOnInit(): void {
        for(let i = 0; i < this.data.length; i++) {
            this.data[i].orderByString = moment(this.data[i].orderBy).calendar(null, {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                nextWeek: 'dddd',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'DD/MM/YYYY'
            });
        }
    }
}