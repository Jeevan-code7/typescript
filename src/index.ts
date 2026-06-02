//Lession 1 : Basics

/*let age: number = 21;
let platform: string = "jiohotstar";
let isPrime: boolean = true;

function greet(age: number, platform: string, isPrime: boolean): string {
//   return type of the particular variable
  return `he is ${age} years old , he is watching cricket in ${platform} and isPrime is ${isPrime}`;
}

console.log(greet(age, platform, isPrime)); */

// Most of the time you don't need to write types.
// let name = "Levi";
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

//  Lesson 2: Interfaces, Type Aliases, Union Types & Literal Types

//  Interface  :- Best for object shapes.
//  Type :-  Best for: Unions , Intersections , Primitive aliases , Advanced types

// type Status = "loading" | "success";
// type Theme = "dark" | "light";

// Union Types  :-  One variable can hold multiple types.

// let userId: string | number;
//
// userId = 23;
// userId = "jeevan";
//
// console.log(userId);

// real world example many Api returns the "id" : 123 or json { "id": "123" }
/*
literal Types  :-

type Status = "loading" | "success" | "error";

let status: Status;

status = "loading";
status = "success";

status = "completed"; Error
*/

/*
 combining unions 

type Role = "admin" | "user" | "moderator";

interface User {
  id: number;
  name: string;
  role: Role;
}

const user: User = {
  id: 1,
  name: "Levi",
  role: "admin"
};  */

/*
 * 6. Type Narrowing

  function calculateDiscount(
  discount: string | number
) {
  if (typeof discount === "number") {   // type narrowing
    return discount;
  }

  return Number(discount);
}
 */

// assigment
/*
type productStatus = "in Stock" | "out-of-stock" | "coming soon";

interface product {
  id: number | string;
  title: string;
  price: number;
  status: productStatus;
}

const productItems: product[] = [
  {
    id: 1,
    title: "Apples",
    price: 500,
    status: "in Stock",
  },
  {
    id: 2,
    title: "pineapple",
    price: 100,
    status: "out-of-stock",
  },
  {
    id: 1,
    title: "grapes",
    price: 100,
    status: "in Stock",
  },
];

function printProductStatus(productItems: product[]): void {
  productItems.forEach((items) => {
    console.log(`${items.title} is ${items.status}`);
  });
} */

/*// printProductStatus(productItems);
interface product {
  id: number | string;
  title: string;
  price: number;
  status: productStatus;
}
type productStatus = "in Stock" | "out-of-stock" | "coming soon";
const productItems: product[] = [
  {
    id: 1,
    title: "Apples",
    price: 500,
    status: "in Stock",
  },
  {
    id: "second one",
    title: "pineapple",
    price: 100,
    status: "out-of-stock",
  },
  {
    id: 1,
    title: "grapes",
    price: 100,
    status: "in Stock",
  },
];
function printProductStatus(productItems: product[]): void {
  productItems.forEach((items) => {
    console.log(`${items.title} is ${items.status}`);
  });
}
printProductStatus(productItems);

function getProduct(productItems: product[]): void {
  productItems.forEach((items) => {
    if (items.id === "string") {
      console.log(`product name is ${items.id}`);
    } else {
      console.log(`product number is ${items.id}`);
    }
  });
}

getProduct(productItems);
*/

// Generics

// Generics allow you to create reusable components, functions, classes, and types that work with multiple data types while preserving type safety.  // Type Placeholder
// Generics Holds types   <T>

// function identity<T>(value: T): T {
//   return value;
// }
//
// const name = identity<string>("Levi");
//
// const age = identity<number>(22);
//
// console.log(name);
// console.log(age);

// const names: Array<string> = ["jeevan", "kumar"];

// function getElements<T>(ele: T[]): T {
//   return ele[0];
// }
//
// console.log(getElements(["apple", "orange", "grapes", "coffe", "congrats"]));
// console.log(getElements([1, 2, 3, 4, 5, 6]));

// function createMultiple<T, U>(first: T, second: U) {
//   return {
//     first,
//     second,
//   };
// }
//
// console.log(createMultiple("levi", 22));

// //  Generic Interfaces
//
// interface ApiResponce<T> {
//   success: boolean;
//   data: T;
// }
// interface user {
//   id: number;
//   title: string;
// }
//
// const responce: ApiResponce<user> = {
//   success: true,
//   data: {
//     id: 1,
//     title: "God",
//   },
// };

/*

function echo<T>(ele: T): T {
  return ele;
}

console.log(echo("hello"));
console.log(echo(24));
console.log(echo(true));

function getLastItem<T>(items: T[]): T {
  return items[2];
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["a", "b", "c"]));

function makePair<T, U>(first: T, second: U) {
  return {
    first,
    second,
  };
}

makePair("Levi", 22);

interface ApiResponce<T> {
  status: boolean;
  data: T;
}

interface employee {
  id: number;
  name: string;
}

const responceData: ApiResponce<employee> = {
  status: true,
  data: {
    id: 2,
    name: "Durandhar",
  },
};

console.log(responceData);

function printLength<
  T extends {
    length: number;
  },
>(value: T): void {
  console.log(value.length);
}

printLength("Levi");

printLength([1, 2, 3, 4]);
printLength("100");
 it takes every type except number  
*/

// Lesson 4 :- Utility Types
