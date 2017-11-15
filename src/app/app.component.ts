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

  ngOnInit = () => {
    console.log('Component loaded');
  }
  constructor() {
    this.firstName = 'Karthikeyan';
    this.lastName = 'Karuppusamy';
  }
  SubmitFunc = (a, b) => {
    this.title = a + ' ' + b;
  }
}
