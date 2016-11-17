import { browser, element, by } from 'protractor';

describe('E2E Tests', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('value prop page should have 2 bars', function () {
    element.all(by.css('.vp-chart-background')).count();
    console.log("c");
  });

});
