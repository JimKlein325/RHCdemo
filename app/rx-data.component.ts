import { Component, OnInit } from '@angular/core';
import { RxRecord }          from './rx-record.model';
import { RxDataService }     from './rx-data.service';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

@Component({
    moduleId: module.id,
    selector: 'rx-data',
    template: `
      <h1>{{title}}</h1>

      <h3>Drug Class: <span class='drugClass'>Oncologics</span></h3>

      <ul class='rx-tabular'>
        <li *ngFor='let record of rxdata'>
          {{record.rxName}}, {{record.ptId}}, {{record.drId}}, {{record.state}}, {{record.city}}, {{record.zip}}
        </li>
      </ul>

      <div class="rx-data"></div>
    `,
    providers: [RxDataService]
})
export class RXDataComponent implements OnInit {
  title = 'RX Data Component';
  rxdata: RxRecord[];

  constructor(private rxDataService: RxDataService) {}




  static drawGraph(data: any[]): void{
      let margin = {
              left: 200,
              right: 20,
              bottom: 20,
              top: 20
          }
          let width = 400,
              height = 300;

          let graph = d3.select(".rx-data")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          // Add scales for the axes (ignore intellisense, this works fine)
          let yScale = d3Scale.scaleLinear()
              .domain([0, d3.max(data.map(function(d) { return d.drId } ))])
              .range([height, 0]);
          //categorical scale
          let categories = data.map(function(d) { return d.ptId });
          let catScale = d3Scale.scaleBand()
              .domain(categories)
              .range([0, height])
              .paddingInner(0.4)
              .paddingOuter(0.2);

          // Define Axes
          let yAxis = d3Axis.axisLeft(yScale)
              .tickSize(0);

          let xAxis = d3Axis.axisBottom(catScale);

          let vertGuide = graph.append("g")
              .attr("class", "axis")
          yAxis(vertGuide);

          let horiGuide = graph.append('g').attr('class',"axis")
            .attr("transform", "translate(" + 0 + "," + height + ")");
          xAxis(horiGuide);
          // Draw rectangles
          graph.selectAll("rect")
              .data(data)
              .enter().append("rect")
              .attr("width", catScale.bandwidth())
              .attr("fill", "blue")
              .attr("x", function(d) {
                  return catScale(d.ptId);
              })
              .attr("y", function(d) { return height - yScale(d.drId) })
              .attr("height", function(d) { return yScale(d.drId) });
  }
  ngOnInit(): void {
      this.rxDataService.getRxData()
          .then(function(d) {
              RXDataComponent.drawGraph(d);
          })
  }








}
