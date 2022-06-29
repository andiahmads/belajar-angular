import { style } from '@angular/animations';
import { Component, Inject} from '@angular/core';


@Component({
  selector: 'app-test',
  template:'<button class="panel" [style.background-color]="color" (click)="onClick($event)">Click</button>',
  styles: ['h1 { color:blue }'],
})
export class TestComponent {

  color: string = 'blue';
  onClick(event:any) {
    alert('Click color: ' + this.color);
  }
}