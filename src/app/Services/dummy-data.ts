import {Robot} from '../Models/robot';
import {Conveyor} from '../Models/cell-components/conveyor';
import {Cell} from '../Models/cell';


const robot = new Robot('r1', 'Robot 1');
const conveyor = new Conveyor('c1', 'Conveyor 1');

export const DUMMY_CELL: Cell = (() => {
  const cell = new Cell('cell-1', 'Welding Cell');
  cell.cellComponents.push(robot, conveyor);
  return cell;
})();
