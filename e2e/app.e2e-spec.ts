import { C6Page } from './app.po';

describe('c6 App', () => {
  let page: C6Page;

  beforeEach(() => {
    page = new C6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
