import { ComponentFixture } from '@angular/core/testing';
import { HTMLElementOrNot, PageObject as TsPageObject } from 'ts-page-object';

/** checks if the element is an ComponentFixture */
export const isComponentFixture = (any: any): boolean => !!any.nativeElement;

export abstract class PageObject extends TsPageObject {
  /** Initialize PageObject for this ``fixture`` */
  constructor(fixture: ComponentFixture<unknown>, undefined?: undefined);
  /** Initialize PageObject for this exact ``componentElement`` */
  constructor(componentElement: HTMLElementOrNot, undefined?: undefined);
  /** Initialize the PageObject by searching the selector from {@link PageObject#getSelector} in the provided `parentElement` */
  constructor(
    parentElement: HTMLElementOrNot,
    useGetSelectorOfPageObject?: true,
  );
  /** Initialize the PageObject by searching the  selector in the provided `parentElement` */
  constructor(parentElement: HTMLElementOrNot, selector?: string);
  constructor(
    ec: ComponentFixture<unknown> | HTMLElementOrNot,
    useGetSelector: boolean | string = false,
  ) {
    if (isComponentFixture(ec)) {
      // constructor fixture
      super((ec as ComponentFixture<unknown>).nativeElement);
    } else {
      super(ec as HTMLElementOrNot, useGetSelector as any);
    }
  }
}
