import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent implements OnInit {
  title = 'Interpolation';

  name = 'Andi ahmad saputra';

  count: number = 0;
  text = '';

  warna ="red";
  clickCount(): void {
    this.count++;
    if (this.count % 2 == 0) {
      this.text = 'genap';
      this.warna = 'red';

    } else {
      this.warna = 'blue';
      this.text = 'ganjil';
    }
  }

  

  

  constructor() {}

  ngOnInit(): void {}
}
