import { BackwerkTutorialPage } from './app.po';

describe('backwerk-tutorial App', () => {
  let page: BackwerkTutorialPage;

  beforeEach(() => {
    page = new BackwerkTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Users');
  });

  it('should display list of users', () => {
    page.navigateTo();
    expect(page.getUsers().count()).toEqual(10);
  });

  it('should display albums for user', () => {
    page.navigateTo();
    expect(page.getAlbumsForUser().count()).toEqual(10);
  });

  it('should display photos for user', () => {
    page.navigateTo();
    expect(page.getPhotosForUser().count()).toEqual(500);
  });
});
