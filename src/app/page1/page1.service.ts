import { Injectable } from '@angular/core';

import { Dispatcher, Action, IncrementAction } from '../store';


@Injectable()
export class Page1Service {
  constructor(
    private dispatcher$: Dispatcher<Action>
  ) { }


  increment(){
    this.dispatcher$.next(new IncrementAction(1));
  }
}