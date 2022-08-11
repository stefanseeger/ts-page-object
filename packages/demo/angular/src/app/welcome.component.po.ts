import { PageObject } from '@ts-page-objects/ngx-page-object';

const TITLE_SELECTOR = '[data-test-id="title"]';
const LIST_ITEM_SELECTOR = 'li';
const SHOW_SELECTOR = '[data-test-id="show"]';
const WAIT_SELECTOR = '[data-test-id="wait"]';
const PRICE_SELECTOR = '[data-test-id="price"]';
const CHECKBOX_SELECTOR = 'input[type="checkbox"]';
const TEXT_SELECTOR = 'input[type="text"]';
export class WelcomeComponentPO extends PageObject {
  public getSelector(): string {
    return 'app-welcome';
  }

  public getTextContent(): string | null {
    return this.textContent(TITLE_SELECTOR);
  }

  public getNormalizedTextContent(): string | null {
    return this.normalizedTextContent(TITLE_SELECTOR);
  }

  public getTextContents(): string[] {
    return this.textContents(LIST_ITEM_SELECTOR);
  }

  public getNormalizedTextContents(): string[] {
    return this.normalizedTextContents(LIST_ITEM_SELECTOR);
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

  public getPriceFloat() {
    return this.getFloat(PRICE_SELECTOR);
  }

  public getPriceInt() {
    return this.getInt(PRICE_SELECTOR);
  }

  public isCheckboxChecked() {
    return this.isChecked(CHECKBOX_SELECTOR);
  }

  public checkCheckbox() {
    return this.click(CHECKBOX_SELECTOR);
  }

  public isCheckboxValid() {
    return this.isValid(CHECKBOX_SELECTOR);
  }

  public setTextValue(value: string) {
    return this.setValue(TEXT_SELECTOR, value);
  }

  public getTextValue() {
    return this.getValue(TEXT_SELECTOR);
  }
}
