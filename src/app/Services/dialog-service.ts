import {Injectable, signal} from '@angular/core';
// dialog.service.ts
@Injectable({ providedIn: 'root' })
export class DialogService {
  // dialog.service.ts
  errorMessage = signal<string | null>(null);
  openCount = signal<number>(0);

  showError(message: string) {
    this.errorMessage.set(message);
    this.openCount.update(c => c + 1); // always a new value
  }

  dismiss() {
    this.errorMessage.set(null);
  }
}
