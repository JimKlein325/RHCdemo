import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

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
        //Draw D3 Graph
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
            let catScale = d3Scale.scaleBand()
                .domain(this.data.map(function(d) { return d.metricName }))
                .range([0, height])
                .paddingInner(0.4)
                .paddingOuter(0.2);
            // Define Axes
            // let yAxis = d3.axisLeft()
            //     .scale(catScale)
            
            // graph.append("g")
            //     .attr("class", "axis")
            //     .call(yAxis);
            
            // Draw rectangles
            graph.selectAll("rect")
                .data(this.data)
                .enter().append("rect")
                .attr("height", catScale.bandwidth())
                .attr("y", function(d) {
                    return catScale(d.metricName)
                })
                .attr("width", function(d) { return xScale(d.metricScore) })
        }
}