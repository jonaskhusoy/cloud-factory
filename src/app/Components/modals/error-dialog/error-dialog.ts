import {
  Component,
  input,
  output,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  inject,
  ViewChild,
  ElementRef,
  signal
} from '@angular/core';
import {DialogService} from '../../../Services/dialog-service';

@Component({
  selector: 'app-error-dialog',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.css',
})
export class ErrorDialog {
  dialogService = inject(DialogService);

  @ViewChild('trigger') trigger!: ElementRef<HTMLButtonElement>;

  message = signal<string | null>(null);

  constructor() {
    effect(() => {
      if (this.dialogService.openCount() > 0) {
        this.trigger?.nativeElement.click();
      }
    });
  }
}
