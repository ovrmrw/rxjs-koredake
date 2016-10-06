import { RxjsKoredakePage } from './app.po';

describe('rxjs-koredake App', function() {
  let page: RxjsKoredakePage;

  beforeEach(() => {
    page = new RxjsKoredakePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
