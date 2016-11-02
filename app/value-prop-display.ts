import * as d3 from 'd3';

export class ValuePropDisplay {
  constructor() {}
  showChartDetailed(CQMInput: any, div: any) {
    let CQMKeys = Object.keys(CQMInput);
    let knownReported: any[] = [];
    let knownUnreported: any[] = [];
    let unknownReported: any[] = [];
    let unknownUnreported: any[] = [];
    for (let i = 0; i < CQMKeys.length; i++) {
      let currentCQM = CQMInput[CQMKeys[i]];
      if (currentCQM['known']) {
        if (currentCQM['reported']) {
          knownReported.push(currentCQM);
        } else {
          knownUnreported.push(currentCQM);
        }
      } else {
        if (currentCQM['reported']) {
          unknownReported.push(currentCQM);
        } else {
          unknownUnreported.push(currentCQM);
        }
      }
    }
    let numTotalCQMs = knownReported.length + knownUnreported.length +
                      unknownReported.length + unknownUnreported.length;
    let divWidth = div.style('width');
    divWidth = parseFloat(divWidth);
    let ratio = divWidth / numTotalCQMs;
    div.style('width', numTotalCQMs * ratio + 'px');
    div.append('div')
      .style('width', knownReported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .attr('class', 'bar kr');
    div.append('div')
      .style('width', knownUnreported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .attr('class', 'bar ku');
    div.append('div')
      .style('width', unknownReported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .attr('class', 'bar ur');
    div.append('div')
      .style('width', unknownUnreported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .attr('class', 'bar uu');
  }
}
