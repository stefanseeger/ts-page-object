import {Component, OnInit} from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'app-welcome',
  template: `
    <h1 data-test-id="title"> Ugly text with some extra spaces and line breaks </h1>
    <ul>
      <li>first </li>
      <li>second </li>
      <li>third </li>
    </ul>
    <button (click)="toggleShowAfterOneSecond()" data-test-id="show">{{show ? 'Hide': 'Show'}}</button>
    <ng-container *ngIf="show"><div data-test-id="wait">I am hear</div></ng-container>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void { }

  public show = false;

  toggleShowAfterOneSecond() {
    const that = this;
    setTimeout(() => {
      that.show = !that.show;
    }, 1000)
  }
}
