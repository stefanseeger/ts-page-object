import {NgxPageObject} from '@ts-page-objects/ngx-page-object';

import {WelcomeComponentPO} from './welcome.component.po';

export class AppComponentPO extends NgxPageObject {
  public getSelector(): string {
    return 'app-root';
  }

  public getWelcome() {
    return new WelcomeComponentPO(this.element, true);
  }
}
