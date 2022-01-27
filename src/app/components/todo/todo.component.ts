import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'
import { IAppState } from '../../store/reducers/todo.reducer'
import { TodoAction } from '../../store/actions/todo.action';
import { ITodo } from '../../store/states/todo.state'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @select() todos 

  model: ITodo = {
    id: 0,
    desc: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  }

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: TodoAction.Increment, todo: this.model})
  }
}