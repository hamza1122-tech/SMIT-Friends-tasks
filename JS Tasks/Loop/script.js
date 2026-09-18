// TASK 1
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// TASK 2
// let num = 0;
// while (num <= 100) {
//   let input = Number(prompt("Enter the number"));
//   if (input > 100) {
//     break;
//   }
//   num++;
// }

// TASK 3
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < i; j++) {

//     console.log("*");
//   }
// }
// don't understand on task 3

// TASK 4
// let arr1 = [1, 2, 3, 4, 5];
// let reverse = [];
// for (let i = arr1.length - 1; i >= 0; i--) {
//   reverse.push(arr1[i]);
// }
// console.log(reverse);

// TASK 5
let days = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < days.length; i++) {
  switch (days[i]) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;

    default:
      break;
  }
}
