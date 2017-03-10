import { Ng2ParrotWingsDemoPage } from './app.po';

describe('ng2-parrot-wings-demo App', function() {
  let page: Ng2ParrotWingsDemoPage;

  beforeEach(() => {
    page = new Ng2ParrotWingsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
