import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '../store';
import { Page1Service } from './page1.service';


@Component({
  selector: 'app-page1',
  template: `
  `
})
export class Page1Component {
  constructor(
    private service: Page1Service,
    private store: Store,
  ) { }
  
}
