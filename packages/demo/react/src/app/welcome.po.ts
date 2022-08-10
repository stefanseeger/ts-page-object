import { PageObject } from '@ts-page-objects/ts-page-object';

const TITLE_SELECTOR = '[data-test-id="title"]';
const SHOW_SELECTOR = '[data-test-id="show"]';
const WAIT_SELECTOR = '[data-test-id="wait"]';
export class WelcomePO extends PageObject {
  public getSelector(): string {
    return '[data-test-id="welcome"]';
  }

  public getTextContent(): string | null {
    return this.textContent(TITLE_SELECTOR);
  }

  public getNormalizedTextContent(): string | null {
    return this.normalizedTextContent(TITLE_SELECTOR);
  }

  public getTextContents(): string[] {
    return this.textContents('li');
  }

  public getNormalizedTextContents(): string[] {
    return this.normalizedTextContents('li');
  }

  public getShowHideButtonText(): string | null {
    return this.normalizedTextContent(SHOW_SELECTOR);
  }

  public clickShowHideButton(): void {
    this.click(SHOW_SELECTOR);
  }

  public getWaitText(): string | null {
    return this.normalizedTextContent(WAIT_SELECTOR);
  }

  public waitForTextAppear() {
    return this.waitToAppear(WAIT_SELECTOR);
  }

  public waitForTextDisappear() {
    return this.waitToDisappear(WAIT_SELECTOR);
  }
}
