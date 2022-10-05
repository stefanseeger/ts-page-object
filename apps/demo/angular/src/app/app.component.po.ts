import { PageObject } from 'ngx-page-object';

import { WelcomeComponentPO } from './welcome.component.po';

export class AppComponentPO extends PageObject {
  public getSelector(): string {
    return 'app-root';
  }

  public getWelcome() {
    return new WelcomeComponentPO(this.element, true);
  }
}
