import { add } from './modules/math';


console.log('you are ready to start coding typescript...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const main = document.createElement('div');
const child = document.createElement('p');
child.innerHTML = 'Hello';

main.appendChild(child);
root.appendChild(main);


import { Box } from './Box';
import { data, IData } from './data';

// total units
const totalUnits = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => Number(y.units as string) > 0))
  .map((x: IData[]) => x.filter((y: IData) => y.free != '1'))
  .map((x: IData[]) => x.filter((y: IData) => y.return_item != '1'))
  .map((x: IData[]) => x.reduce((total: number, curr: IData) => total += Number(curr.units), 0))
  .fold((x: number) => x);

console.log('Total Units', totalUnits);

// total unit cost
const totalUnitCost = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => Number(y.units) > 0))
  .map((x: IData[]) => x.filter((y: IData) => y.free != '1'))
  .map((x: IData[]) => x.filter((y: IData) => y.return_item != '1'))
  .fold((x: IData[]) => x)

console.log('Total Unit Cost', totalUnitCost);

// total cases
// total case cost
// cost of all purchased items
// total returns
// total free items
// total returns

