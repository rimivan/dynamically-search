import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-and-list',
  templateUrl: './search-and-list.component.html',
  styleUrls: ['./search-and-list.component.css']
})
export class SearchAndListComponent implements OnInit {
  searchKey = '';
  list: string[] = [];
  constructor() { }

  ngOnInit(): void {
   this.initList();
  }

  private initList(): void {
    this.list = Array.from({length: 20}, () => `Val_${Math.floor(Math.random() * 100)}`);
  }


}
