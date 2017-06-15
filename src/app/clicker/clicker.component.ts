import { Component, OnInit } from '@angular/core';

import * as Rx from 'rxjs/Rx';

import { ClickerCountComponent } from './clicker-count.component';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: [ './clicker.component.css' ]
})

export class ClickerComponent implements OnInit {

  counter: number = 0;
  

  ngOnInit(): void {
    // Use RxJS observable on click event to indicate to user their last time of (click) interaction.
    // While this isn't all that useful, it's to demonstrate the use of an RxJS observable.
    
    var button = document.querySelector('.click-me');

    var clickStream = Rx.Observable.fromEvent(button, 'click');
    
    var doubleClickStream = clickStream
      .bufferWhen(() => clickStream.debounceTime(250))
      .map(list => list.length)
      .filter(length => length >= 2)
      .subscribe(totalClicks => {
          this.counter += 1;
          console.log(`multi clicks total: ${totalClicks}`);
      });
  }
}
