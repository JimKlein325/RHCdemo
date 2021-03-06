import * as d3 from 'd3';
import { ValuePropDataService } from './value-prop-data.service';

export class ValuePropDisplay {
  constructor(private vpds: ValuePropDataService) { }
  showChartSimple(data: any, div: any, max = 64) {
    let name = data.name;
    let value = data.value;
    let dollars = data.dollars;
    let divWidth = div.style('width');
    divWidth = parseFloat(divWidth) - 4;
    let ratio = divWidth / max;
    let childBar = div.select('.animated-bar');
    if (childBar.node() === null) {
      div.append('div')
        .attr('class', 'name-label')
        .style('padding-bottom', '5px')
        .text(name);
      div.append('div')
        .attr('class', 'vp-chart-background')
        .style('height', divWidth / 5 + 'px')
        .style('width', max * ratio + 'px')
        .style('border-radius', '10px')
        .append('div')
          .attr('class', 'animated-bar' + (name === 'Recentia' ? ' recentia' : ''))
          .style('height', divWidth / 5 + 'px')
          .style('width', value * ratio + 'px')
          .style('border-radius', '7.5px')
          .style('border-bottom-left-radius', '7.5px')
          .append('div')
            .style('padding', divWidth / 25 + 'px')
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
  showChartDetailed(CQMInput: any, name: string, div: any) {
    let CQMKeys = Object.keys(CQMInput);
    let knownReported: any[] = [];
    let knownUnreported: any[] = [];
    let unknownReported: any[] = [];
    let unknownUnreported: any[] = [];
    for (let i = 0; i < CQMKeys.length; i++) {
      let currentCQM = CQMInput[CQMKeys[i]];
      if (currentCQM['known']) {
        if (currentCQM['reported']) {
          knownReported.push(CQMKeys[i]);
        } else {
          knownUnreported.push(CQMKeys[i]);
        }
      } else {
        if (currentCQM['reported']) {
          unknownReported.push(CQMKeys[i]);
        } else {
          unknownUnreported.push(CQMKeys[i]);
        }
      }
    }
    let numTotalCQMs =  knownReported.length + knownUnreported.length +
                        unknownReported.length + unknownUnreported.length;
    let divWidth = div.style('width');
    divWidth = parseFloat(divWidth) - 4;
    let ratio = divWidth / numTotalCQMs;
    div.selectAll('*').remove();
    div.append('div')
      .attr('class', 'name-label')
      .style('padding-bottom', '5px')
      .text(name);
    if ((unknownReported.length + unknownUnreported.length) * ratio - 4 > 0) {
      div.append('div')
        .style('width', (unknownReported.length + unknownUnreported.length) * ratio - 4 + 'px')
        .style('margin-left', knownReported.length * ratio + 2 + 'px')
        .style('text-align', 'center')
        .text('not memorable without support');
      div.append('div')
        .style('width', (unknownReported.length + unknownUnreported.length) * ratio - 4 + 'px')
        .style('height', '10px')
        .style('margin-left', knownReported.length * ratio + 2 + 'px')
        .style('margin-bottom', '5px')
        .style('border-top-left-radius', '5px')
        .style('border-top-right-radius', '5px')
        .style('border', '2px solid gray')
        .style('border-bottom', '0px');
    }
    let bar = div.append('div')
      .attr('class', 'vp-chart-background')
      .style('height', divWidth / 5 + 'px')
      .style('width', numTotalCQMs * ratio + 'px')
      .style('border-radius', '10px');

    let last = unknownUnreported.length === 0 && unknownReported.length === 0 && knownUnreported.length === 0;
    let first = true;
    bar.append('div')
      .style('width', knownReported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .style('position', 'relative')
      .style('border-top-right-radius', last ? '7.5px' : '0px')
      .style('border-bottom-right-radius', last ? '7.5px' : '0px')
      .style('border-top-left-radius', '7.5px')
      .style('border-bottom-left-radius', '7.5px')
      .attr('class', 'kr')
      .on('mouseover', function() {
        let text = knownReported.join(', ');
        let segment = d3.select(this);
        segment.select('div').remove();
        segment.append('div')
          .style('max-width', '150px')
          .style('position', 'absolute')
          .style('left', '5px')
          .style('top', divWidth / 5 + 5 + 'px')
          .style('padding', '5px')
          .attr('class', 'chart-tooltip')
          .text(text);
      })
      .on('mouseout', function() {
        d3.select(this).select('div').remove();
      })
      .append('p')
        .style('text-align', 'center')
        .style('margin-top', '15px')
        .text(knownReported.length === 0 ? '' : knownReported.length);
    last =  unknownUnreported.length === 0 && knownUnreported.length === 0;
    first = knownReported.length === 0;
    bar.append('div')
      .style('width', unknownReported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .style('position', 'relative')
      .style('border-top-right-radius', last ? '7.5px' : '0px')
      .style('border-bottom-right-radius', last ? '7.5px' : '0px')
      .style('border-top-left-radius', first ? '7.5px' : '0px')
      .style('border-bottom-left-radius', first ? '7.5px' : '0px')
      .attr('class', 'ur')
      .on('mouseover', function() {
        let text = unknownReported.join(', ');
        let segment = d3.select(this);
        segment.select('div').remove();
        segment.append('div')
          .style('max-width', '150px')
          .style('position', 'absolute')
          .style('left', '5px')
          .style('top', divWidth / 5 + 5 + 'px')
          .style('padding', '5px')
          .attr('class', 'chart-tooltip')
          .text(text);
      })
      .on('mouseout', function() {
        d3.select(this).select('div').remove();
      })
      .append('p')
        .style('text-align', 'center')
        .style('margin-top', '15px')
        .text(unknownReported.length === 0 ? '' : unknownReported.length);
    last = knownUnreported.length === 0;
    first =  knownReported.length === 0 && unknownReported.length === 0;
    bar.append('div')
      .style('width', unknownUnreported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .style('position', 'relative')
      .style('border-top-right-radius', last ? '7.5px' : '0px')
      .style('border-bottom-right-radius', last ? '7.5px' : '0px')
      .style('border-top-left-radius', first ? '7.5px' : '0px')
      .style('border-bottom-left-radius', first ? '7.5px' : '0px')
      .attr('class', 'uu')
      .on('mouseover', function() {
        let text = unknownUnreported.join(', ');
        let segment = d3.select(this);
        segment.select('div').remove();
        segment.append('div')
          .style('max-width', '150px')
          .style('position', 'absolute')
          .style('left', '5px')
          .style('top', divWidth / 5 + 5 + 'px')
          .style('padding', '5px')
          .attr('class', 'chart-tooltip')
          .text(text);
      })
      .on('mouseout', function() {
        d3.select(this).select('div').remove();
      })
      .append('p')
        .style('text-align', 'center')
        .style('margin-top', '15px')
        .text(unknownUnreported.length === 0 ? '' : unknownUnreported.length);
    first = knownReported.length === 0 && knownUnreported.length === 0 && unknownReported.length === 0;
    bar.append('div')
      .style('width', knownUnreported.length * ratio + 'px')
      .style('height', 'inherit')
      .style('float', 'left')
      .style('position', 'relative')
      .style('border-top-right-radius', '7.5px')
      .style('border-bottom-right-radius', '7.5px')
      .style('border-top-left-radius', first ? '7.5px' : '0px')
      .style('border-bottom-left-radius', first ? '7.5px' : '0px')
      .attr('class', 'ku')
      .on('mouseover', function() {
        let text = knownUnreported.join(', ');
        let segment = d3.select(this);
        segment.select('div').remove();
        segment.append('div')
          .style('max-width', '150px')
          .style('position', 'absolute')
          .style('left', '5px')
          .style('top', divWidth / 5 + 5 + 'px')
          .style('padding', '5px')
          .attr('class', 'chart-tooltip')
          .text(text);
      })
      .on('mouseout', function() {
        d3.select(this).select('div').remove();
      })
      .append('p')
        .style('text-align', 'center')
        .style('margin-top', '15px')
        .text(knownUnreported.length === 0 ? '' : knownUnreported.length);
    if ((unknownUnreported.length + knownUnreported.length) * ratio - 4 > 0) {
      div.append('div')
        .style('width', (unknownUnreported.length + knownUnreported.length) * ratio - 4 + 'px')
        .style('height', '10px')
        .style('float', 'left')
        .style('margin-left', (knownReported.length + unknownReported.length) * ratio + 2 + 'px')
        .style('margin-top', '5px')
        .style('border-bottom-left-radius', '5px')
        .style('border-bottom-right-radius', '5px')
        .style('border', '2px solid gray')
        .style('border-top', '0px');
      div.append('div')
        .style('width', (unknownUnreported.length + knownUnreported.length) * ratio - 4 + 'px')
        .style('margin-left', (knownReported.length + unknownReported.length) * ratio + 2 + 'px')
        .style('text-align', 'center')
        .text('not reported by your current vendor');
    }
    let numUncredited = unknownReported.length + knownUnreported.length + unknownUnreported.length;
    d3.select('#uncredited').text(numUncredited);
    this.vpds.getDollars(numUncredited).subscribe(function(r: number) {
      d3.select('#dollar-value').text(r-480);
    });
  }
}
