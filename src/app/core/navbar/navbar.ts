import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
