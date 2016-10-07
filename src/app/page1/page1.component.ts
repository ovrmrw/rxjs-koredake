import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '../store';
import { Page1Service } from './page1.service';


@Component({
  selector: 'app-page1',
  template: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Page1Component implements OnInit, OnDestroy {
  constructor(
    private service: Page1Service,
    private store: Store,
  ) { }

  ngOnInit() { }

  ngOnDestroy() { }
}
