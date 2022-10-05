/**
 * @returns first HTMLElement for selector
 */
export const $ = (element: HTMLElement, selector: string): HTMLElement | null => element.querySelector<HTMLElement>(selector);

/**
 * @returns all HTMLElements for selector
 */
export const $$ = (element: HTMLElement, selector: string): HTMLElement[] => {
  const nodeList = element.querySelectorAll(selector);
  const htmlElements: HTMLElement[] = [];
  nodeList?.forEach((htmlElement) => htmlElements.push(htmlElement as HTMLElement));

  return htmlElements;
};

/** @returns ``element`` when ``selector`` is missing. Otherwise return the first element with the given ``selector``. */
export function elementForOptionalSelector(
  element: HTMLElement,
  selector?: string,
): HTMLElement | null {
  return selector ? $(element, selector) : element;
}

/** @returns `true` when element or element with selector is in DOM. */
export const isDisplayed = (element: HTMLElement, selector = ''): boolean => !!elementForOptionalSelector(element, selector);

/** Resolves promise when element is in DOM. Rejects after too many retries (3 seconds per default). */
export const waitToAppear = async (
  element: HTMLElement,
  selector: string,
  retries = 30,
): Promise<void> => new Promise((resolve, reject) => {
  let counter = 0;
  const checkExist = setInterval(() => {
    if (isDisplayed(element, selector)) {
      clearInterval(checkExist);
      resolve();
    } else if (counter >= retries) {
      reject();
    }
    counter++;
  }, 100);
});

/** Wait for an Element to disappear from the dom and then resolve promise */
export const waitToDisappear = async (
  element: HTMLElement,
  selector: string,
  retries = 30,
): Promise<void> => {
  const currentElement = element;
  return new Promise((resolve, reject) => {
    let counter = 0;
    const checkExist = setInterval(() => {
      if (!$(currentElement, selector)) {
        clearInterval(checkExist);
        resolve();
      } else if (counter >= retries) {
        reject();
      }
      counter++;
    }, 100);
  });
};

export const throwNotFound = (element: HTMLElement | null | undefined) => {
  if (!element) {
    throw new Error('Element not found');
  }
};

/** replaces all fancy white-space characters with spaces und trims surrounding spaces */
export const normalizeText = (
  text: ChildNode | HTMLElement | string | null,
): string | null => {
  if ((text as HTMLElement)?.textContent) {
    text = (text as HTMLElement).textContent;
  }
  return (text && (text as string).replace(/\s+/g, ' ').trim()) || null;
};

/** @returns textContent of element */
export const textContent = (
  element: HTMLElement,
  selector?: string,
): string | null => {
  const el = elementForOptionalSelector(element, selector);
  return (el && el.textContent) || null;
};

/** @returns an array of strings for the element and selector */
export const textContents = (
  element: HTMLElement,
  selector: string,
): string[] => {
  const htmlElements = $$(element, selector);
  if (htmlElements) {
    return htmlElements
      .map((HTMLElement) => HTMLElement.textContent || '')
      .filter((text) => !!text);
  }
  return [];
};

/** @returns normalized textContent of element */
export const normalizedTextContent = (
  element: HTMLElement,
  selector?: string,
): string | null => normalizeText(textContent(element, selector));

/** @returns an array of strings for the element and selector */
export const normalizedTextContents = (
  element: HTMLElement,
  selector: string,
): string[] => {
  const htmlElements = $$(element, selector);
  if (htmlElements) {
    return htmlElements
      .map((HTMLElement) => normalizeText(HTMLElement.textContent) || '')
      .filter((text) => !!text);
  }
  return [];
};

/** @returns `true` when element has disabled attribute. */
export const isDisabled = (element: HTMLElement, selector: string): boolean => {
  const el = elementForOptionalSelector(element, selector);
  throwNotFound(el);
  return !!el!.hasAttribute('disabled');
};

/** @returns textContent parsed as int number */
export const getInt = (
  element: HTMLElement,
  selector?: string,
): number | null => {
  const text = normalizedTextContent(element, selector);
  if (text) {
    return Number.parseInt(text, 10);
  }
  return null;
};

/** @returns textContent parsed as int number */
export const getFloat = (
  element: HTMLElement,
  selector?: string,
): number | null => {
  const text = normalizedTextContent(element, selector);
  if (text) {
    return Number.parseFloat(text);
  }
  return null;
};

/** dispatches blur event */
export const blur = (element: HTMLElement, selector?: string): void => {
  const el = elementForOptionalSelector(element, selector);
  throwNotFound(el);
  el?.dispatchEvent(new Event('input'));
  el?.dispatchEvent(new Event('change'));
  el?.dispatchEvent(new Event('blur'));
};

/** Sets value in an InputElement */
export const setValue = (
  element: HTMLElement,
  value: string,
  selector?: string,
): void => {
  const el = elementForOptionalSelector(element, selector) as HTMLInputElement;
  throwNotFound(el);
  el.value = value;
  blur(el);
};

/** Click on HTMLElement */
export const click = (element: HTMLElement, selector?: string): void => {
  const el = elementForOptionalSelector(element, selector) as HTMLElement;
  throwNotFound(el);
  el.click();
  blur(el);
};

/** Checks if the element is checked */
export const isChecked = (
  element: HTMLInputElement,
  selector?: string,
): boolean => {
  const el = elementForOptionalSelector(element, selector) as HTMLInputElement;
  throwNotFound(el);
  return !!el.checked;
};

/** Gets the value of the element */
export const getValue = (
  element: HTMLInputElement,
  selector?: string,
): string => {
  const el = elementForOptionalSelector(element, selector) as HTMLInputElement;
  throwNotFound(el);
  return el.value;
};

/** Checks if the element is valid */
export const isValid = (
  element: HTMLInputElement,
  selector?: string,
): boolean => {
  const el = elementForOptionalSelector(element, selector) as HTMLInputElement;
  throwNotFound(el);
  return !JSON.parse(el.getAttribute('aria-invalid') ?? 'false');
};

/** dispatches keyUp event */
export const keyUp = (
  element: HTMLInputElement,
  key: string,
  selector?: string,
): void => {
  const event = new KeyboardEvent('keyup', {
    key,
  });
  const el = elementForOptionalSelector(element, selector) as HTMLInputElement;
  throwNotFound(el);
  el.dispatchEvent(event);
};
