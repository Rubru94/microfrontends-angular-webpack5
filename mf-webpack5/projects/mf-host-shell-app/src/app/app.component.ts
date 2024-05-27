import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public commonsLibService: CommonsLibService) {}

  title = 'mf-host-shell-app';
}
