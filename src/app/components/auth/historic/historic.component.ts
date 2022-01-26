import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../../../store/actions/counter.action';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {
  users: any;

  currentIndex = -1;
  title = '';

  page = 1;
  pageSize = 10;
  pageSizes = [10,15,20,30,40];
  count$: Observable<number>;


  constructor(private userService: UserService, private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
   }

  ngOnInit() {

    this.list();
  }

  list() {
    this.userService.listHistoric()
    .subscribe( data => {
      console.log(data)
      this.users = data;
    });
  }

  handlePageChange(event) {
    this.page = event;
    this.list();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.list();
  }

  filterDate(start, end) {

    let startDate = new Date(start);
    let endDate = new Date(end);
    this.users = this.users.filter(m => new Date(m.date) >= startDate && new Date(m.date) <= endDate);
   
  }
  refresh() {
    this.list();
  }

  
  increment() {
    this.store.dispatch(new Increment());
   }
 
   decrement() {
     this.store.dispatch(new Decrement());
   }
 
   reset() {
     this.store.dispatch(new Reset());
   }
}
