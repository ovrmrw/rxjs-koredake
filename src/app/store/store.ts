import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Dispatcher, Provider, ReducerContainer } from './common';
import { Action } from './actions';
import { incrementReducer, timestampReducer } from './reducers';


export interface AppState {
  counter: number;
  timestamp: number | null;
}


const initialState: AppState = {
  counter: 0,
  timestamp: null
};


@Injectable()
export class Store {
  readonly provider$: Provider<AppState>;

  constructor(
    private dispatcher$: Dispatcher<Action>
  ) {
    this.provider$ = new BehaviorSubject(initialState);
    this.combineReducers();
    this.applyEffectors();
  }


  private combineReducers(): void {
    ReducerContainer
      .zip<AppState>(...[
        incrementReducer(initialState.counter, this.dispatcher$),
        timestampReducer(initialState.timestamp, this.dispatcher$),

        (counter, timestamp): AppState => {
          return Object.assign<{}, AppState, {}>({}, initialState, { counter, timestamp });
        }
      ])
      .subscribe(newState => {
        this.provider$.next(newState);
        this.effectAfterReduced(newState);
      });
  }


  private effectAfterReduced(newState): void {
    console.log('newState:', newState);
  }


  private applyEffectors(): void {

  }


  getState(): Observable<AppState> {
    return this.provider$.asObservable();
  }

}
