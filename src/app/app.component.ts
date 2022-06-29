import { Component } from '@angular/core';
import { TestComponent } from './testing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends TestComponent {
  title = 'belajar-angular';
  name = 'andi ahmad';
  constructor() {
    super();
    this.color = 'blue';
  }
}
