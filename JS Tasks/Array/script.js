// TASK-1
// let frutes = ["Banana", "Mango", "Apple", "Pineapple", "Strawberry"];
// for (let i = 0; i < frutes.length; i++) {
//   console.log(frutes[i]);
// }

// TASK-2
// let nums = [10, 25, 3, 47, 8, 59];
// let largnum = [0];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > largnum) {
//     largnum = nums[i];
//   }
// }
// console.log(largnum);

// TASK-3
// let arr = [];
// let sum = 0;
// for (let input = 1; input <= 5; input++) {
//   let input = Number(prompt("Enter numbers:"));
//   arr.push(input);
//   input;
// }
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// let avg = sum / arr.length;

// console.log(arr);
// console.log(sum);
// console.log(avg);

// TASK-4
// let students = ["Ali", "Hamza", "Kamran", "Imran", "Saad"];
// for (let index = 1; index < students.length; index++) {
//   console.log(index, students[index]);
// }

// TASK 5
let marks = [65, 78, 45, 90, 32];
let count = 0;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 50) {
    count++;
  }
}
console.log(count);
