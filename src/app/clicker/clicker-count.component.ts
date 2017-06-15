import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'clicker-count',
  template: `
    <p>Count: {{counter}}</p>
  `
})
export class ClickerCountComponent {
  @Input() counter: number;
}