// // Masala 1 
let random = Math.floor(Math.random() * 100) + 1;
console.log("Tasodifiy son:", random);

// // Masala 2. 
let num = prompt("Son kiriting:");
num = Number(num);
if (num < 0) {
  console.log("Musbat son kiriting");
} else {
  console.log("Kvadrat ildiz:", Math.sqrt(num));
}

// Masala 3. 
let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Number(`Son ${i + 1} kiriting:`));
}
console.log("Eng katta son:", Math.max(...numbers));
console.log("Eng kichik son:", Math.min(...numbers));

// // Masala 4. 
// let realNum = prompt("Haqiqiy son kiriting:");
// realNum = Number(realNum);
// console.log("Pastga yaxlitlash:", Math.floor(realNum));
// console.log("Yuqoriga yaxlitlash:", Math.ceil(realNum));

// // Masala 5. 
// let radius = prompt("Radius kiriting:");
// radius = Number(radius);
// const pi = 3.1415;
// let length = 2 * pi * radius;
// console.log("Aylana uzunligi:", length);

// // Masala 6. 
// let num1 = prompt("Son kiriting:");
// num1 = Number(num1);
// console.log(num1 >= 0 ? "Musbat son" : "Manfiy son");

// // Masala 7. 
// let age = prompt("Yoshingizni kiriting:");
// age = Number(age);
// console.log(age >= 18 ? "Ruxsat etilgan" : "Ruxsat etilmagan");

// // Masala 8. 
// let num2 = prompt("Son kiriting:");
// num2 = Number(num2);
// console.log(num2 % 2 === 0 ? "Juft son" : "Toq son");

// // Masala 9.
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // Masala 10.
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   let num3 = Number(prompt("Son kiriting:"));
//   if (num3 > 0) {
//     sum += num3;
//   }
// }
// console.log("Musbat sonlar yig'indisi:", sum);

// // Masala 11.
// for (let i = 30; i <= 50; i++) {
//   console.log(i);
// }

// // Masala 12. 
// let positiveCount = 0;
// let negativeCount = 0;
// for (let i = 0; i < 15; i++) {
//   let num4 = Number(prompt("Son kiriting:"));
//   if (num4 >= 0) {
//     positiveCount++;
//   } else {
//     negativeCount++;
//   }
// }
// console.log("Musbat sonlar:", positiveCount);
// console.log("Manfiy sonlar:", negativeCount);

// // Masala 13.
// let count1 = 0;
// for (let i = 0; i < 10; i++) {
//   let num5 = Number(prompt("Son kiriting:"));
//   if (num5 >= 5) {
//     count1++;
//   }
// }
// console.log("5 yoki undan katta sonlar soni:", count1);

// // Masala 14.
// let sumOdd = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     sumOdd += i;
//   }
// }
// console.log("Toq sonlar yig'indisi:", sumOdd);

// // Masala 15.
// for (let i = 0; i < 5; i++) {
//   let age = Number(prompt(`Yosh ${i + 1} kiriting:`));
//   console.log(age >= 18 ? "Voyaga yetgan" : "Voyaga yetmagan");
// }

// // Masala 16. 
// let count2 = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     count2++;
//   }
// }
// console.log("Juft sonlar soni:", count2);

// // Masala 17. 
// let count3 = 0;
// for (let i = 0; i < 10; i++) {
//   let num6 = Number(prompt("Son kiriting:"));
//   if (num6 >= 5 && num6 <= 10) {
//     count3++;
//   }
// }
// console.log("5 va 10 orasidagi sonlar:", count3);

// // Masala 18.
// for (let i = 0; i < 10; i++) {
//   let num7 = Number(prompt("Son kiriting:"));
//   if (num7 > 0) {
//     console.log(num7);
//   }
// }

// // Masala 19.
// let count4 = 0;
// for (let i = 0; i < 15; i++) {
//   let num8 = Number(prompt("Son kiriting:"));
//   if (num8 % 2 === 0 || num8 < 0) {
//     count4++;
//   }
// }
// console.log("Juft yoki manfiy sonlar soni:", count4);

// // Masala 20.
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// // Masala 21.
// for (let i = 0; i < 10; i++) {
//   let num9 = Number(prompt("Son kiriting:"));
//   if (num9 >= 50) {
//     console.log(num9);
//   }
// }

// // Masala 22.
// let foundZero = false;
// for (let i = 0; i < 10; i++) {
//   let num10 = Number(prompt("Son kiriting:"));
//   if (num10 === 0) {
//     foundZero = true;
//     break;
//   }
// }
// console.log(foundZero ? "0 mavjud" : "0 mavjud emas");
