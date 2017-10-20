import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: any;
  constructor(private http: HttpClient,private router:Router) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      // Read the result field from the JSON response.
      console.log('result http call '+JSON.stringify(data))
      this.results = data;
    });
  }

  ngOnInit() {
  }

}
