/*let age: number = 21;
let platform: string = "jiohotstar";
let isPrime: boolean = true;

function greet(age: number, platform: string, isPrime: boolean): string {
//   return type of the particular variable
  return `he is ${age} years old , he is watching cricket in ${platform} and isPrime is ${isPrime}`;
}

console.log(greet(age, platform, isPrime)); */

// Most of the time you don't need to write types.
let name = "Levi";
// TypeScript automatically understands: let name: string
//This feature is called Type Inference.  Senior developers use inference whenever possible.

//    Functions
//
// function productPrice(price: number, quantity: number): number {
//   return price * quantity;
// }
//
// const totalPrice = productPrice(200, 3);
// console.log(totalPrice);

//     Arrays

// const biscuitProduct: string[] = [
//   "Happy Happy",
//   "mario",
//   "Good Day",
//   "Sun Feast",
// ];
//
// biscuitProduct.push("sunflower");
//
// console.log(biscuitProduct[2]);

//  Objects In Typescript

// const productList: {
//   id: number;
//   name: string;
//   price: number;
//   caption: string;
// } = {
//   id: 1,
//   name: "suntoor",
//   price: 45,
//   caption: "mummy soap",
// };
//
// console.log(productList.caption);

// Optional Properties
//
// const productList: {
//   id: number;
//   name: string;
//   price?: number;
//   caption: string;
// } = {
//   id: 1,
//   name: "suntoor",
//   caption: "mummy soap",
// };
// console.log(productList.price);

// Project
//
// type Employee = {
//   id: number;
//   name: string;
//   salary: number;
//   department: string;
// };
//
// const employees: Employee[] = [
//   {
//     id: 1,
//     name: "Ajay Verma",
//     salary: 200000,
//     department: "AIML",
//   },
//   {
//     id: 2,
//     name: "Jeevan Kumar",
//     salary: 20000,
//     department: "ECE",
//   },
//   {
//     id: 3,
//     name: "Ravi",
//     salary: 300000,
//     department: "EEE",
//   },
// ];

// function EmployeNames(Employes: Employe[]): any {
//   Employes.map((PersonName) => {
//     console.log(`this guy is my employe ${PersonName.name}`);
//   });
// }
// function EmployeSalary(Employes: Employe[]): any {
//   Employes.map((PersonName) => {
//     console.log(`${PersonName.name} salary is ${PersonName.salary}`);
//   });
// }
//
// EmployeNames(Employes);
// EmployeSalary(Employes);

// function getTotalSalary(employees: Employee[]): number {
//   let total = 0;
//
//   employees.forEach((employee) => {
//     total += employee.salary;
//   });
//
//   return total;
// }
//
// console.log(getTotalSalary(employees));
