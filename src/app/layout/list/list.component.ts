import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List } from '../list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'website', 'company'];
  listData: any[] = [];
  filterData: any;

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
    this.fetchList();
  }
  
  fetchList() {
    this.listService.getLists().subscribe(
      (res: any) => {
        this.listData = res;
        console.log(this.listData);
      });
  }

}
