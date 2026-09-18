// TASK 1

// let myself = {
//   name: "Hamza",
//   age: 21,
//   city: "Peshwar",
//   isStudent: true,
// };
// console.log(myself.name);
// console.log(myself.age);
// console.log(myself.city);
// console.log(myself.isStudent);

// TASK 2
// let car = {
//   brand: "Honda Civic",
//   model: 2019,
//   price: 5000000,
// };
// let discount = (car.price * 10) / 100;
// console.log(discount);
// let finalprice = car.price - discount;
// console.log(finalprice);

// TASK 3
// let chai = [
//   (kashmiri = {
//     name: "Black Tea",
//     price: 50,
//   }),
//   (green_tea = {
//     name: "Green tea",
//     price: 60,
//   }),
//   (coffee = {
//     name: "Black Coffe",
//     price: 100,
//   }),
// ];
// for (let i = 0; i < chai.length; i++) {
//   console.log(chai[i]);
// }

// TASK 4
let student = {
  name: "Ali",
  marks: Number(prompt("Enter Your Marks")),
  grad: "A",
};
console.log(student.name);
console.log(student.marks);

if (student.marks >= 85) {
  console.log("Your grade is", student.grad);
} else if (student.marks <= 84 && student.marks >= 70) {
  console.log("Your grade is", (student.grad = "B"));
} else if (student.marks <= 69 && student.marks >= 50) {
  console.log("Your grade is", (student.grad = "C"));
} else if (student.marks <= 49 && student.marks >= 33) {
  console.log("Your grade is", (student.grad = "D"));
} else if (student.marks < 33) {
  console.log("Your grade is", (student.grad = "F"));
}
