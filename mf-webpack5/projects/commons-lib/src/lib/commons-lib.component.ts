import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-commons-lib',
  standalone: true,
  imports: [],
  template: ` <p>commons-lib works!</p> `,
  styles: [],
})
export class CommonsLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
