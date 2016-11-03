import * as d3 from 'd3';

export class ValuePropDisplay {
  constructor() {}
  showChartSimple(data: any, div: any, max = 64) {
    let name = data.name;
    let value = data.value;
    let dollars = data.dollars;
    let divWidth = div.style('width');
    let divHeight = div.style('height');
    divWidth = parseFloat(divWidth);
    divHeight = parseFloat(divHeight);
    let ratio = divWidth / max;
    let childBar = div.select('.animated-bar');
    if (childBar.node() === null) {
      div.append('div')
        .attr('class', 'name-label')
        .style('padding-bottom', '5px')
        .text(name);
      div.append('div')
        .style('height', divHeight + 'px')
        .style('width', max * ratio + 'px')
        .style('background-color', 'lightgray')
        .style('border', '2px solid gray')
        .style('border-radius', '10px')
        .append('div')
          .attr('class', 'animated-bar')
          .style('height', divHeight + 'px')
          .style('width', value * ratio + 'px')
          .style('background-color', name === 'Recentia' ? 'steelblue' : 'olive')
          .style('border-radius', '7.5px')
          .style('border-bottom-left-radius', '7.5px')
          // .style('box-shadow', '0px 0px 10px 3px ' + (name === 'Recentia' ? '#39668c' : '#616100') + ' inset')
          .append('div')
            .style('padding', divHeight / 5 + 'px')
            .style('color', 'white')
            .text('$' + dollars + 'K');
      div.append('div')
        .attr('class', 'CQM-label')
        .text(value)
        .style('padding-top', '5px')
        .style('padding-left', value * ratio - 10 + 'px');
    } else {
      let label = div.select('.name-label');
      let CQMLabel = div.select('.CQM-label');
      childBar.transition()
        .style('width', value * ratio + 'px');
      label.text(name);
      childBar.select('div')
        .text('$' + dollars + 'K');
      CQMLabel.transition()
        .style('padding-left', value * ratio - 10 + 'px')
        .text(value);
    }
  }
  showAnimatedChart(vendorData: any, div: any, i = 0, max = 64) {
    this.showChartSimple(vendorData[i], div, max);
    let display = this;
    let next = i + 1 < vendorData.length ? i + 1 : 0;
    setTimeout(function() {
      display.showAnimatedChart(vendorData, div, next, max);
    }, 3000);
  }
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
    div.selectAll('*').remove();
    div.append('div')
      .style('width', knownReported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .style('background-color', 'green')
      .attr('class', 'kr');
    div.append('div')
      .style('width', knownUnreported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .style('background-color', 'yellow')
      .attr('class', 'ku');
    div.append('div')
      .style('width', unknownReported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .style('background-color', 'orange')
      .attr('class', 'ur');
    div.append('div')
      .style('width', unknownUnreported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .style('background-color', 'red')
      .attr('class', 'uu');
  }
}
