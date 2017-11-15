import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstName: String;
  lastName: String;
  title: String;

  ngOnInit() {
    this.firstName = 'Karthikeyan';
    this.lastName = 'Karuppusamy';
    console.log('Component loaded');
  }
  constructor() {

  }

  SubmitFunc = (a, b) => {
    this.title = a + ' ' + b;
  }
}
