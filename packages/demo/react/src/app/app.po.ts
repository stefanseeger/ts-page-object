import { PageObject } from '@ts-page-objects/core';
import { WelcomePO } from './welcome.po';

export class AppPO extends PageObject {
  public getSelector(): string {
    return 'app-root';
  }

  public getWelcome() {
    return new WelcomePO(this.element, true);
  }
}
