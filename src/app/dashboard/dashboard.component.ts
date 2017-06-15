import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    // Use RxJS observable on click event to indicate to user their last time of (click) interaction.
    // While this isn't all that useful, it's to demonstrate the use of an RxJS observable.
    
  }
}
