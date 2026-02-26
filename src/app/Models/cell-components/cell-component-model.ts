import { signal, computed } from '@angular/core';

export type CellState = 'OK' | 'Active' | 'Error';
export enum OperationalStatus {
  Running = 'Running',
  Idle = 'Idle',
  Faulted = 'Faulted',
  Offline = 'Offline',
  Unknown = 'Unknown'
}
export abstract class CellComponent {
  id: string;
  name: string;
  status = signal<OperationalStatus>(OperationalStatus.Idle);
  faultMessage = signal<string | undefined>(undefined);
  lastUpdated = signal<Date | undefined>(undefined);

  textStatusColor = computed(() => {
    switch (this.status()) {
      case OperationalStatus.Running: return 'text-success-500';
      case OperationalStatus.Faulted: return 'text-error-600';
      default:                        return 'text-gray-400';
    }
  });

  borderStatusColor = computed(() => {
    switch (this.status()) {
      case OperationalStatus.Running: return 'outline outline-2 -outline-offset-2  outline-success-500 outline-pulse-active';
      case OperationalStatus.Faulted: return 'outline outline-2 -outline-offset-2  outline border-error-600 outline-pulse-error';
      default:                        return 'dark:outline dark:outline-white/10';
    }
  });

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

