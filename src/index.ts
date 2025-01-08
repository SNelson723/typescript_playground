import { add } from './modules/math';


console.log('you are ready to start coding typescript...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const main = document.createElement('div');
const child = document.createElement('p');

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
document.getElementById('totalUnits')!.innerHTML = `Total Units: ${totalUnits}`;

// total unit cost
const totalUnitCost = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => Number(y.units) > 0))
  .map((x: IData[]) => x.filter((y: IData) => y.free != '1'))
  .map((x: IData[]) => x.filter((y: IData) => y.return_item != '1'))
  .map((x: IData[]) => x.reduce((total: number, cur: IData) => total += Number(cur.units) * parseFloat(cur.cost as string), 0))
  .map((x: number) => `$${x.toFixed(2)}`)
  .fold((x: number) => x);

console.log('Total Unit Cost', totalUnitCost);
document.getElementById('totalUnitCost')!.innerHTML = `Total Unit Cost: ${totalUnitCost}`

// total cases
const totalCases = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => Number(y.cases) > 0))
  .map((X: IData[]) => X.filter((y: IData) => y.free != '1' && y.return_item != '1'))
  .map((x: IData[]) => x.reduce((total: number, curr: IData) => total += Number(curr.cases), 0))
  .fold((x: number) => x);

  console.log('Total Cases', totalCases);
  document.getElementById('totalCases')!.innerHTML = `Total Cases: ${totalCases}`;

// total case cost
const totalCaseCost = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => Number(y.cases) > 0))
  .map((x: IData[]) => x.filter((y: IData) => y.free != '1' && y.return_item != '1'))
  .map((x: IData[]) => x.reduce((total: number, cur: IData) => total += +cur.cases * parseFloat(cur.cost as string) , 0))
  // .trace()
  .fold((x: number) => x)


console.log('Total Case Cost', totalCaseCost);
document.getElementById('totalCaseCost')!.innerHTML = `Total Case Cost: $${totalCaseCost}`

// cost of all purchased items

// total free items
const totalFreeItems = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => y.free == '1'))
  .map((x: IData[]) => x.reduce((total: number, cur: IData) => total += Number(cur.cases) + Number(cur.units), 0))
  // .trace()
  .fold((x: number) => x);

console.log('Total Free Items', totalFreeItems);
document.getElementById('totalFreeItems')!.innerHTML = `Total Free Items: ${totalFreeItems}`

// total returns
const totalReturns = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => y.return_item == '1'))
  .map((x: IData[]) => x.reduce((total: number, cur: IData) => total += Number(cur.cases) + Number(cur.units), 0))
  // .trace()
  .fold((x: number) => x);

console.log('Total Returns', totalReturns);

// total purchased
const totalPurchased = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => y.free != '1'))
  .map((x: IData[]) => x.map((y: IData) => ({
    cases: parseInt(y.units as string) * parseFloat(y.cost as string),
    units: parseInt(y.units as string) * parseFloat(y.cost as string),
    return_item: y.return_item,
    upc: y.upc
  })))
  .map((x: IData[]) => x.reduce((acc, cur) => cur.return_item ? acc - +cur.cases + +cur.units : +cur.cases + +cur.units, 0))
  .map((x: number) => `$${x.toFixed(2)}`)
  .fold((x: string) => x)

  console.log(totalPurchased)