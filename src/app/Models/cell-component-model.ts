export type CellState = 'OK' | 'Active' | 'Error';

export class CellComponent {
  constructor(
    public name: string,
    public status: string,
    public state: CellState,
    public icon: string // lucide or any icon name / svg string
  ) {}
}

// Dummy instance for testing
export const DUMMY_CELL: CellComponent = new CellComponent(
  'Robot Arm A1',
  'Idle',
  'Error',
  'bot'
);
