import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';
import {Navbar} from './core/navbar/navbar';
import {CommonModule} from '@angular/common';
import {Footer} from './core/footer/footer';
import {LoginButtonComponent} from './Components/auth/login-button.component';
import {LogoutButtonComponent} from './Components/auth/logout-button.component';
import {ProfileComponent} from './Components/auth/profile.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Navbar, Footer, LoginButtonComponent, LogoutButtonComponent, ProfileComponent],
  templateUrl: `./app.html`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cloud-factory');
  protected auth = inject(AuthService)
}
