import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'wellness-measures',
    template: '<div class="wellness-measures"></div>',
})
export class WellnessMeasuresComponent implements OnInit{
    data = [
        { metricName: "Quality Payment Program", metricScore: 70 },
        { metricName: "Preventive Medicine", metricScore: 60 },
        { metricName: "Type II diabetes mellitus", metricScore: 50 },
        { metricName: "Chronic Kidney Disease", metricScore: 40 },
        { metricName: "Congestive Heart Failure", metricScore: 30 },
        { metricName: "Coronary Artery Disease", metricScore: 20 },
        { metricName: "Asthma", metricScore: 10 }
    ]

    ngOnInit(): void {
        console.log(this.data.map(function(d) { return d.metricName }))
        //Draw D3 Graph
            let margin = {
                left: 200,
                right: 20,
                bottom: 20,
                top: 20
            }
            let width = 400,
                height = 300;
                    console.log(width - margin.left - margin.right)

            let graph = d3.select(".wellness-measures")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            let xScale = d3.scaleLinear()
                .domain(0, 100)
                .range([0, width - margin.left - margin.right]);
            //categorical scale
            let catScale = d3.scaleBand()
                .domain(this.data.map(function(d) { return d.metricName }))
                .range([0, width - margin.top - margin.bottom]);
            // Define Axes
            let yAxis = d3.axisLeft()
                .scale(catScale)
            
            graph.append("g")
                .attr("class", "axis")
                .call(yAxis);
            // Add scales for the axes
            
            // 
        }
}