import {CellState} from '../cell';
import {Robot} from '../cell-components/robot';
import {Conveyor} from '../cell-components/conveyor';
import {CellProgram} from '../program.model';

export interface CellDto {
  emergencyStop: boolean;
  operatorSafety: boolean;
  leftSafetyCurtain: boolean;
  rightSafetyCurtain: boolean;
  doorSafety: boolean;
  status: CellState;
  activeProgram: CellProgram | null;
  robot: Robot | null;
  conveyor: Conveyor | null;
}
