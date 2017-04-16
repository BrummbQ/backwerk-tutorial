import { browser, element, by } from 'protractor';

export class BackwerkTutorialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getUsers() {
    return element.all(by.css('app-user'));
  }

  getAlbumsForUser() {
    let user = this.getUsers().first();
    user.element(by.css('.albumbutton')).click();
    return user.all(by.css('app-album'));
  }

  getPhotosForUser() {
    let user = this.getUsers().first();
    user.element(by.css('.albumbutton')).click();
    return user.all(by.css('app-album .photo'));
  }
}
