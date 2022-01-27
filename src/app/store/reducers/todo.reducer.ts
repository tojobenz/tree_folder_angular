import { Action } from '@ngrx/store';
import { TodoAction } from '../actions/todo.action';
import { ITodo } from '../states/todo.state';

export const initialState = 0;

export interface IAppState {
    todos: ITodo[]
    lastUpdate: Date 
  }
  
  export const INIT_STATE: IAppState = {
    todos: [],
    lastUpdate: null 
  }

export function todosReducer(state, action) {
  switch (action.type) {
    case TodoAction.Increment:
        action.todo.id = state.todos.length + 1
        return {
          todos: [Object.assign({}, action.todo), ...state.todos],
          lastUpdate: new Date()
        }

    case TodoAction.Decrement:
      return state - 1;

    case TodoAction.Reset:
      return 0;

    default:
      return state;
  }
}

