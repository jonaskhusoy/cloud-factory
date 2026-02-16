import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from './Components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: `
    <main>
      <app-home />
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cloud-factory');
}
