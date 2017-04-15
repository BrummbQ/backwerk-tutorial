import { BackwerkTutorialPage } from './app.po';

describe('backwerk-tutorial App', () => {
  let page: BackwerkTutorialPage;

  beforeEach(() => {
    page = new BackwerkTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
