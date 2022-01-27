import { Action } from '@ngrx/store';
 
export enum TodoAction {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}
 
export class Increment implements Action {
  readonly type = TodoAction.Increment;
}
 
export class Decrement implements Action {
  readonly type = TodoAction.Decrement;
}
 
export class Reset implements Action {
  readonly type = TodoAction.Reset;
}