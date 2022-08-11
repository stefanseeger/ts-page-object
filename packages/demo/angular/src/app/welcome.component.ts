import { Component, OnInit } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'app-welcome',
  template: `
    <h1 data-test-id="title">
      Ugly text with some extra spaces and line breaks
    </h1>
    <ul>
      <li>first&nbsp;</li>
      <li>second&nbsp;</li>
      <li>third&nbsp;</li>
    </ul>
    <button (click)="toggleShowAfterOneSecond()" data-test-id="show">
      {{ show ? 'Hide' : 'Show' }}
    </button>
    <ng-container *ngIf="show"
      ><div data-test-id="wait">I am hear</div></ng-container
    >
    <span data-test-id="price">123.20€</span>
    <input
      type="checkbox"
      [(ngModel)]="checked"
      [attr.aria-invalid]="!checked"
    />
    <input type="text" />
  `,
  styles: [],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public show = false;
  public checked = false;

  toggleShowAfterOneSecond() {
    this.show = !this.show;
  }
}
