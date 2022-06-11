import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  template: '<h4>Welcome. Please choose a form from above links.</h4>'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
