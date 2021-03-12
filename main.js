// Exercise I

// I nacin
// function Object() {
//   this.name = "";
//   this.setName = function (nameArg) {
//     this.name = nameArg;
//   };

//   this.company = "";
//   this.setCompany = function (companyArg) {
//     this.company = companyArg;
//   };
//   this.job = "";
//   this.setJob = function (jobArg) {
//     this.job = jobArg;
//   };
//   this.salary = "";
//   this.setSalary = function (salaryArg) {
//     this.salary = salaryArg;
//   };
// }

// const Branko = new Object();
// Branko.setName("Branko");
// Branko.setCompany("Brainster");
// Branko.setJob("Manager");
// Branko.setSalary("500eu");
// console.log(Branko);

// let ulList = document.createElement("ul");
// let liEl = document.createElement("li");
// ulList.appendChild(liEl);

// II nacin
// function firstEmp(name, company, job, salary) {
//   this.name = name;
//   this.company = company;
//   this.job = job;
//   this.salary = salary;

//   this.ulList1 = function () {
//     console.log(
//       `${this.name}: ${this.company}, ${this.job}, ${this.salary}eu.`
//     );
//   };
// }

// const first = new firstEmp("Branko", "Brainster", "Manager", 500);

// first.ulList1();

// function secondEmp(name, company, job, salary) {
//   this.name = name;
//   this.company = company;
//   this.job = job;
//   this.salary = salary;

//   this.ulList2 = function () {
//     console.log(
//       `${this.name}: ${this.company}, ${this.job}, ${this.salary}eu.`
//     );
//   };
// }

// const second = new secondEmp("Stanko", "EVN", "Owner", 570);

// second.ulList2();

// function thirdEmp(name, company, job, salary) {
//   this.name = name;
//   this.company = company;
//   this.job = job;
//   this.salary = salary;

//   this.ulList3 = function () {
//     console.log(
//       `${this.name}: ${this.company}, ${this.job}, ${this.salary}eu.`
//     );
//   };
// }

// const third = new thirdEmp("Darko", "Freelancer", "Front-end developer", 1000);

// third.ulList3();

// uste da se stavat vo ul lista vo html

// Exercise II

// function Cube(area, perimeter) {}

// Exercise III
