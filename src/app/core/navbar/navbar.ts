import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {RoleService} from '../../Services/roles';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
    AsyncPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
  private roleService = inject(RoleService);
  private auth = inject(AuthService)
  roles$ = this.roleService.roles$;

  ngOnInit() {
    this.auth.idTokenClaims$.subscribe(claims => {
      console.log('All claims:', claims);
      console.log('Roles:', claims?.['http://localhost:4200/roles']);
    });

    this.auth.isAuthenticated$.subscribe(auth => {
      console.log('Is authenticated:', auth);
    });

    this.auth.user$.subscribe(user => {
      console.log('User:', user);
    });
  }

  isSuper$ = this.roleService.hasRole$('super');
}
