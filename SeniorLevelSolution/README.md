type Employee = {
id: number;
name: string;
salary: number;
department: string;
};

const employees: Employee[] = [
{
id: 1,
name: "Ajay Verma",
salary: 200000,
department: "AIML",
},
{
id: 2,
name: "Jeevan Kumar",
salary: 20000,
department: "ECE",
},
{
id: 3,
name: "Ravi",
salary: 300000,
department: "EEE",
},
];

function printEmployeeNames(
employees: Employee[]
): void {
employees.forEach((employee) => {
console.log(employee.name);
});
}

function getTotalSalary(
employees: Employee[]
): number {
return employees.reduce(
(total, employee) => total + employee.salary,
0
);
}

printEmployeeNames(employees);

console.log(
`Total Salary: ${getTotalSalary(employees)}`
);

type ProductStatus =
| "in-stock"
| "out-of-stock"
| "coming-soon";

interface Product {
id: number;
title: string;
price: number;
status: ProductStatus;
}

const productItems: Product[] = [
{
id: 1,
title: "Apple",
price: 500,
status: "in-stock",
},
{
id: 2,
title: "Pineapple",
price: 100,
status: "out-of-stock",
},
{
id: 3,
title: "Grapes",
price: 150,
status: "coming-soon",
},
];

function printProductStatus(
products: Product[]
): void {
products.forEach((product) => {
console.log(
`${product.title} is ${product.status}`
);
});
}

function getProduct(
id: string | number
): void {
if (typeof id === "string") {
console.log(
`Searching product by name: ${id}`
);
} else {
console.log(
`Searching product by ID: ${id}`
);
}
}

printProductStatus(productItems);

getProduct(1);
getProduct("Apple");
