import { UfoTapesPage } from './app.po';

describe('ufo-tapes App', function() {
  let page: UfoTapesPage;

  beforeEach(() => {
    page = new UfoTapesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
