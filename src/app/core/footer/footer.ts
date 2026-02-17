import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Press', href: '/press' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Partners', href: '/partners' },
  ];

  currentYear = new Date().getFullYear();
}
