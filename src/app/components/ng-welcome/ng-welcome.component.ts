import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-welcome',
  templateUrl: './ng-welcome.component.html',
  styleUrls: ['./ng-welcome.component.css']
})
export class NgWelcomeComponent implements OnInit {
  title = 'dynamically-search';
  constructor() { }

  ngOnInit(): void {
  }

}
