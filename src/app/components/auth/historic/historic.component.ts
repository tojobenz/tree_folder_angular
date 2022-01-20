import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/service/user.service';
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



  constructor(private userService: UserService) { }

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
}
