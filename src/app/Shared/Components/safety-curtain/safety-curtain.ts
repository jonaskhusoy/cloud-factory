import {Component, HostBinding, input} from '@angular/core';
import { CommonModule } from '@angular/common';

export type CurtainOrientation = 'horizontal' | 'vertical';
export type ArrowDirection = 'left' | 'right' | 'up' | 'down';

@Component({
  selector: 'app-safety-curtain',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './safety-curtain.html',
  styleUrl: './safety-curtain.css',
})
export class SafetyCurtainComponent {
  orientation    = input<CurtainOrientation>('horizontal');
  breached       = input<boolean>(false);
  startDirection = input<ArrowDirection>('right');
  endDirection   = input<ArrowDirection>('right');

  dots = Array(5);

  /** Base SVG arrow points RIGHT (→), so right = 0°. */
  rotationDeg(dir: ArrowDirection): number {
    return { right: 0, down: 90, left: 180, up: 270 }[dir];
  }

  @HostBinding('style.height') get hostHeight() {
    return this.orientation() === 'vertical' ? '100%' : 'auto';
  }

  @HostBinding('style.width') get hostWidth() {
    return this.orientation() === 'horizontal' ? '100%' : 'auto';
  }
}
