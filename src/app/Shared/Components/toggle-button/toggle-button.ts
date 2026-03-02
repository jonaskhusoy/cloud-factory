import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-button.html',
})
export class ToggleComponent {
  value = input.required<boolean>();
  label = input<string>('');
  changed = output<boolean>();

  toggle() {
    this.changed.emit(!this.value());
  }
}
