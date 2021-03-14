// Exercise I

// let ul = document.querySelector("ul");

// function Employee(name, company, job, salary) {
//   this.name = name;
//   this.company = company;
//   this.job = job;
//   this.salary = salary;

//   this.ulList = function () {
//     return `<li>${this.name}: ${this.company}, ${this.job}, ${this.salary}eu.</li>`;
//   };
// }

// const firstEmp = new Employee("Branko", "Brainster", "Manager", 500);
// const secondEmp = new Employee("Stanko", "EVN", "Owner", 570);
// const thirdEmp = new Employee(
//   "Darko",
//   "Freelancer",
//   "Front-end developer",
//   1000
// );

// ul.innerHTML += firstEmp.ulList();
// ul.innerHTML += secondEmp.ulList();
// ul.innerHTML += thirdEmp.ulList();

// Exercise II

// let a = prompt("Please enter the size of the cube: ");

// function Cube(size) {
//   this.size = size;

//   this.sumArea = function () {
//     return 6 * this.size * this.size;
//   };

//   this.sumPerimeter = function () {
//     return 12 * this.size;
//   };
// }

// let newCube = new Cube(a);
// console.log(`The area of a cube is ${newCube.sumArea()}`);
// console.log(`The perimeter of a cube is ${newCube.sumPerimeter()}`);

// Exercise III

class Email {
  constructor(from, to, subject, message) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.message = message;
  }

  Connect() {
    let input1 = document.getElementById("#formGroupInput1");
    input1.value = this.from;
    let input2 = document.getElementById("#formGroupInput2");
    input2.value = this.to;
    let input3 = document.getElementById("#formGroupInput3");
    input3.value = this.subject;
    let input4 = document.getElementById("#formGroupInput4");
    input4.value = this.message;
  }

  fullEmail() {
    alert(
      `The message is from: ${this.from} To: ${this.to} The subject is: ${this.subject} The message is: ${this.message}`
    );
  }
}

let enterFrom = prompt(`This message is from: `);
let enterTo = prompt(`This message is to: `);
let enterSubject = prompt(`The subject is: `);
let enterMessage = prompt(`Message: `);
let check = new Email(enterFrom, enterTo, enterSubject, enterMessage);
check.Connect();
check.fullEmail();
