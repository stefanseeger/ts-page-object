import { act } from '@testing-library/react';
import { HTMLElementOrNot, PageObject as TsPageObject } from 'ts-page-object';

export abstract class PageObject extends TsPageObject {
  protected override click(selector: string, element?: HTMLElementOrNot): void {
    act(() => {
      super.click(selector, element);
    });
  }

  protected override blur(
    selector: string,
    element?: HTMLElement | undefined,
  ): void {
    act(() => {
      super.blur(selector, element);
    });
  }

  override keyUp(
    key: string,
    element?: HTMLElement | undefined,
    selector?: string | undefined,
  ): void {
    act(() => {
      super.keyUp(key, element, selector);
    });
  }
}
