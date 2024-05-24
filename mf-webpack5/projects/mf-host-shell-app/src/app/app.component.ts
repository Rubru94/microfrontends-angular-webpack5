import { Component } from '@angular/core';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-root',
  /*  standalone: true,
  imports: [RouterOutlet], */
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public commonsLibService: CommonsLibService) {}

  title = 'mf-host-shell-app';
}
