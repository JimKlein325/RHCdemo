import { Component, OnInit } from '@angular/core';
import { RxRecord }          from './rx-record.model';
import { RxDataService }     from './rx-data.service';
import { RxDataFilterPipe }  from './rx-data-filter.pipe';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

@Component({
    moduleId: module.id,
    selector: 'rx-data',
    template: `
      <h1>{{title}}</h1>

      <h3>Drug Class: <span class='drugClass'>Oncologics</span></h3>

      <h4>Filter Data By...</h4>
      <form  #filterOptionsForm="ngForm">
        <div class='row'>
          <div class='col-sm-2'>
            <select #modality style="width: 100%">
              <option value="" selected="selected"></option>
              <option value="state">State</option>
              <option value="city">City</option>
              <option value="zip">Zip Code</option>
            </select>
          </div>
          <div class='col-sm-4'>
            <input type="text" style="width: 100%" placeholder="Enter text..." #option>
          </div>
          <div class='col-sm-2'>
            <button (click)="drawGraph(rxdata)" type='submit'>Submit</button>
          </div>
        </div>
      </form>

      <br>

      <ul class='rx-tabular'>
        <li *ngFor='let record of rxdata | rxDataFilter:modality.value:option.value'>
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
  filterModality: string = '';
  filterOption: string = '';


  constructor(private rxDataService: RxDataService) {}




   drawGraph(data: any[]): void{
      let margin = {
              left: 200,
              right: 20,
              bottom: 20,
              top: 20
          }
          let width = 400,
              height = 300;

          let ptNum = data.reduce(function (acc, rx) {
            if (typeof acc[rx.rxName] == 'undefined') {
              acc[rx.rxName] = 1;
            } else {
              acc[rx.rxName] += 1;
            }

            return acc;
          }, {});

          let xValue = Object.keys(ptNum);
          let yValue = xValue.map(function (k) {
              return ptNum[k];
          });

          let ptData: any[] = [];
          for(var i=0; i<xValue.length; i++){
            ptData.push({x: xValue[i], y:yValue[i]});
          }

          let graph = d3.select(".rx-data")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          // Add scales for the axes (ignore intellisense, this works fine)
          let yAxisScale = d3Scale.scaleLinear()
              .domain([0, d3.max(ptData.map(function(d) { return d.y } ))])
              .range([height, 0]);

          let yScale = d3Scale.scaleLinear()
              .domain([0, d3.max(ptData.map(function(d) { return d.y } ))])
              .range([0, height]);
          //categorical scale
          let categories = ptData.map(function(d) { return d.x });
          let catScale = d3Scale.scaleBand()
              .domain(categories)
              .range([0, height])
              .paddingInner(0.4)
              .paddingOuter(0.2);

          // Define Axes
          let yAxis = d3Axis.axisLeft(yAxisScale)
              .tickSize(0)
              .tickFormat(function(e){
                  if(Math.floor(e) != e)
                  {
                      return;
                  }
                  return e;
              });

          let xAxis = d3Axis.axisBottom(catScale);

          let vertGuide = graph.append("g")
              .attr("class", "axis")
          yAxis(vertGuide);

          let horiGuide = graph.append('g').attr('class',"axis")
            .attr("transform", "translate(" + 0 + "," + height + ")");
          xAxis(horiGuide);
          // Draw rectangles
          graph.selectAll("rect")
              .data(ptData)
              .enter().append("rect")
              .attr("width", catScale.bandwidth())
              .attr("fill", "blue")
              .attr("x", function(d) {
                  return catScale(d.x);
              })
              .attr("y", function(d) { return height - yScale(d.y) })
              .attr("height", function(d) { return yScale(d.y) });
  }

  ngOnInit(): void {
    this.getRxData();

  }

  /* service w/promise */
  getRxData(): void {
    this.rxDataService.getRxData().then(rxdata => this.rxdata = rxdata);
  }

}
