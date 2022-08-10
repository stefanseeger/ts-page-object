import {
  $,
  $$,
  blur,
  click,
  getNumber,
  getValue,
  isChecked,
  isDisplayed,
  isValid,
  keyUp,
  normalizedTextContent,
  normalizedTextContents,
  normalizeText,
  setValue,
  textContent,
  textContents,
  waitToAppear,
  waitToDisappear,
} from './core';

export type HTMLElementOrNot = HTMLElement | null | undefined;

export abstract class PageObject {
  /**
   * Base HTMLElement of this PageObject.
   * Can be `undefined` when No match was found in the constructor, in this case {@link PageObject#isDisplayed} will be `false`
   */
  protected element: HTMLElementOrNot;

  /** Initialize PageObject for this exact ``componentElement`` */
  constructor(componentElement: HTMLElementOrNot, undefined?: undefined);
  /** Initialize the PageObject by searching the selector from {@link PageObject#getSelector} in the provided `parentElement` */
  constructor(
    parentElement: HTMLElementOrNot,
    useGetSelectorOfPageObject?: true
  );
  /** Initialize the PageObject by searching the  selector in the provided `parentElement` */
  constructor(parentElement: HTMLElementOrNot, selector?: string);
  constructor(
    element: HTMLElementOrNot,
    useGetSelector: boolean | string = false,
  ) {
    if (!element) {
      // element undefined or null constructor
      this.element = undefined;
    } else if (typeof useGetSelector === 'string') {
      // constructor parentElement selector
      this.element = this.$(useGetSelector, element as HTMLElement) ?? undefined;
    } else {
      // Try to get element by getSelector
      const el = this.$(this.getSelector(), element as HTMLElement);
      if (el && useGetSelector) {
        // constructor parentElement useGetSelectorOfPageObject
        this.element = el;
      } else if (useGetSelector) {
        // constructor parentElement useGetSelectorOfPageObject - but element was not found
        this.element = undefined;
      } else {
        // componentElement constructor
        this.element = element;
      }
    }
    this.onInit();
  }

  /** function which should return the selector of the component of the PageObject */
  public abstract getSelector(): string;

  /** Can optionally be overriden */
  // eslint-disable-next-line class-methods-use-this
  protected onInit(): void {
    // Optionally override function in child to set members after constructor
  }

  /**
   * @returns either the element parameter when present, or otherwise this.element.
   * @throws Error when not elemment was found.
   */
  protected sanitizeElement(element?: HTMLElementOrNot): HTMLElement {
    const el = element || this.element;
    if (!el) {
      throw new Error('No HTMLElement found');
    }
    return el;
  }

  /** @returns first HTMLElement for selector */
  protected $ = (
    selector: string,
    element?: HTMLElementOrNot,
  ): HTMLElementOrNot => $(this.sanitizeElement(element), selector);

  /** @returns all HTMLElements for selector */
  protected $$ = (
    selector: string,
    element?: HTMLElementOrNot,
  ): HTMLElement[] => $$(this.sanitizeElement(element), selector);

  /** replaces all fancy white-space characters with spaces und trims surrounding spaces */
  protected normalizeText = normalizeText;

  /** @returns textContent of element */
  protected textContent = (
    selector: string,
    element?: HTMLElementOrNot,
  ): string | null => textContent(this.sanitizeElement(element), selector);

  /** @returns an array of strings for the element and selector */
  protected textContents = (
    selector: string,
    element?: HTMLElementOrNot,
  ): string[] => textContents(this.sanitizeElement(element), selector);

  /** @returns normalized textContent of element */
  protected normalizedTextContent = (
    selector: string,
    element?: HTMLElementOrNot,
  ): string | null => normalizedTextContent(this.sanitizeElement(element), selector);

  /** @returns an array of strings for the element and selector */
  protected normalizedTextContents = (
    selector: string,
    element?: HTMLElementOrNot,
  ): string[] => normalizedTextContents(this.sanitizeElement(element), selector);

  /** @returns textContent parsed as number */
  protected getNumber = (
    selector: string,
    element?: HTMLElementOrNot,
  ): number | null => getNumber(this.sanitizeElement(element), selector);

  /** @returns `true` when element or element with selector is in DOM. */
  public isDisplayed = (
    selector?: string,
    element?: HTMLElementOrNot,
  ): boolean => isDisplayed(this.sanitizeElement(element), selector);

  /** @returns `true` when element has disabled attribute. */
  public isDisabled(selector: string, element?: HTMLElementOrNot): boolean {
    return !!this.$(selector, element)?.hasAttribute('disabled');
  }

  /**
   * Resolves promise when element is in DOM. Rejects after too many retries (3 seconds per default).
   * `ComponentFixture.autoDetectChanges()` should be called before
  */
  protected async waitToAppear(
    selector: string,
    element?: HTMLElementOrNot,
    retries = 30,
  ): Promise<void> {
    return waitToAppear(this.sanitizeElement(element), selector, retries);
  }

  /**
   * Wait for an Element to disappear from the dom and then resolve promise
   * `ComponentFixture.autoDetectChanges()` should be called before
   */
  protected async waitToDisappear(
    selector: string,
    element?: HTMLElementOrNot,
    retries = 30,
  ): Promise<void> {
    return waitToDisappear(this.sanitizeElement(element), selector, retries);
  }

  /** Sets value in an InputElement */
  protected setValue(selector: string, value: string, element?: HTMLInputElement): void {
    setValue(this.sanitizeElement(element), value, selector);
  }

  /** Click on InputElement */
  protected click(selector: string, element?: HTMLElementOrNot | null): void {
    click(this.sanitizeElement(element), selector);
  }

  /** Checks if the element is checked */
  protected isChecked(selector: string, element?: HTMLInputElement): boolean {
    return isChecked(this.sanitizeElement(element) as HTMLInputElement, selector);
  }

  /** Gets the value of the element */
  protected getValue(selector: string, element?: HTMLInputElement): string {
    return getValue(this.sanitizeElement(element) as HTMLInputElement, selector);
  }

  /** Checks if the element is valid */
  protected isValid(selector: string, element?: HTMLInputElement): boolean {
    return isValid(this.sanitizeElement(element) as HTMLInputElement, selector);
  }

  /** dispatches keyUp event */
  keyUp(key: string, element?: HTMLElement, selector?: string): void {
    keyUp(this.sanitizeElement(element) as HTMLInputElement, key, selector);
  }

  /** dispatches blur event */
  protected blur(selector: string, element? : HTMLElement): void {
    blur(this.sanitizeElement(element), selector);
  }
}
