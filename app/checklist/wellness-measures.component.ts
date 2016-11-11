import { Component, OnInit } from '@angular/core';
import { ChecklistDataService } from './checklist-data.service';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

@Component({
    selector: 'wellness-measures',
    template: '<div class="wellness-measures"></div>',
    providers: [ ChecklistDataService ],
})
export class WellnessMeasuresComponent implements OnInit{
    constructor (private checklistDataService: ChecklistDataService) {}
    static drawGraph(data: any[]): void{
        let margin = {
                left: 200,
                right: 20,
                bottom: 20,
                top: 20
            }
            let width = 400,
                height = 300;

            let graph = d3.select(".wellness-measures")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            // Add scales for the axes (ignore intellisense, this works fine)
            let xScale = d3Scale.scaleLinear()
                .domain([0, 100])
                .range([0, width]);
            //categorical scale
            let categories = data.map(function(d) { return d.metricName });
            let catScale = d3Scale.scaleBand()
                .domain(categories)
                .range([0, height])
                .paddingInner(0.4)
                .paddingOuter(0.2);

            // Define Axes
            let yAxis = d3Axis.axisLeft(catScale)
                .tickSize(0);

            let vertGuide = graph.append("g")
                .attr("class", "axis")
            yAxis(vertGuide);
            
            // Draw rectangles
            graph.selectAll("rect")
                .data(data)
                .enter().append("rect")
                .attr("height", catScale.bandwidth())
                .attr("fill", "blue")
                .attr("y", function(d) {
                    return catScale(d.metricName);
                })
                .attr("width", function(d) { return xScale(d.metricScore) });
    }
    ngOnInit(): void {
        this.checklistDataService.getWellnessMeasures()
            .then(function(d) {
                WellnessMeasuresComponent.drawGraph(d);
            })
    }
}
