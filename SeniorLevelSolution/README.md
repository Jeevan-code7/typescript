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
