import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public appComponent: AppComponent) { 
    this.appComponent.clicked_course("home");
  }

  ngOnInit(): void {
  }

}
