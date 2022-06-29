import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  counter = 0;
  interval:any;

  constructor() { }

  ngOnInit(): void {
  this.interval = setInterval(() => {
      this.counter++
    }, 1000);
  }

  ngOnDestroy(): void {
      // console.log(this.counter++);
      clearInterval(this.interval);

  }

}
