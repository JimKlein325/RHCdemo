import { Component } from '@angular/core';

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
                <td></td>
                <td>{{datum.recOrder}}</td>
                <td>{{datum.orderBy}}</td>
                <td><a href={{datum.problemUrl}}>{{datum.problem}}</a></td>
                <td>{{datum.cqmName}}</td>
                <td>{{datum.guidelinePublisher}}</td>
            </tr>
        </table>
    `
})
export class RecommendationTableComponent {
    data = [
        {
            recOrder: "Hemoblobin A1C",
            orderBy: Date.parse("June 15, 2016"),
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
            problem: "Diabetes mellitus II",
            //We will talk later about how to implement
            //the dynamic routing in the problemUrl
            cqmName: "CMS122",
            cqmUrl: "",
            guidelinePublisher: "CMS",
            guidelinePublisherUrl: ""
        },
    ]
}