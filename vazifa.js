// /**1) Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]
//  */

// function getLevel2(n) {
//   let arr = [];
//   let number = 2;
//   let result = 0;
//   for (let i = 0; arr.length < n; i++) {
//     result = number * 2;
//     arr.push(result);
//     number = result;
//   }
//   return arr;
// }

// console.log(getLevel2(5));

// /** 2) Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]
//  */
// let a = 2;
// let b = 3;
// let n = 5;
// let arr = [a, b];
// for (let i = 2; i < n; i++) {
//   let counter = 0;
//   for (let j = 0; j < i; j++) {
//     counter += arr[j];
//   }
//   arr.push(counter);
// }
// console.log(arr);

// /** 3)  Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.*/

// let arr = [4, 5, 7, 8, 6, 9];
// console.log(arr.reverse());

// /** 4) Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3
//  */

// let arr = [4, 5, 7, 8, 6, 9];
// let counter = 0;
// let result = "";
// for (const element of arr) {
//   if (element % 2 == 1) {
//     result += `${element} `;
//     counter += 1;
//   }
// }

// console.log(`Natija: ${result} toqlar soni = ${counter}`);

// /** 5) Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5
//  */

// let arr = [4, 5, 7, 8, 6, 9];
// let result = "";
// for (const element of arr) {
//   if (element % 2 == 0) {
//     result += `${element} `;
//   }
// }

// for (let i = arr.length; i > 0; i--) {
//   if (arr[i] % 2 == 1) {
//     result += `${arr[i]} `;
//   }
// }
// console.log(result);

// /** 6) Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.*/

// let arr = [4, 5, 7, 8, 6, 9];
// n = arr.length;

// for (let i = 0; i < n; i += 2) {
//   console.log(arr[i]);
// }

/** 7) Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin. */
// bunga tushunmadim

/** 8) Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.
 */

// let arr = [4, 5, 7, 8, 6, 9];
// let n = arr.length;
// let newarr = [];

// for (let i = 0; i < n; i += 2) {
//   newarr.push(arr[i]);
// }
// for (let i = 1; i < n; i += 2) {
//   newarr.push(arr[i]);
// }

// console.log(newarr);

// /** 9) Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin. */

// let arr = [4, 5, 7, 8, 6, 9];
// let n = arr.length;
// let newarr = [];

// for (let i = 1; i < n; i += 2) {
//   newarr.push(arr[i]);
// }
// for (let i = n - 2; i >= 0; i -= 2) {
//   newarr.push(arr[i]);
// }

// console.log(newarr);

/** 10) Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], .. */
// bu ham tushunarsiz ekan

/** 11) Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin. */

// let arr = [4, 5, 7, 8, 6, 9];
// function rangeOutSum(arr, K, L) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i < K || i > L) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(rangeOutSum(arr, 2, 4));

// /** 12) Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]
//  */

// let truthy = [];
// let falsy = [];
// let input = [10, false, "", "Abdulaziz", null];

// for (const element of input) {
//   if (element) {
//     truthy.push(element);
//   } else {
//     falsy.push(element);
//   }
// }
// console.log("Truthy:", truthy);
// console.log("Falsy:", falsy);

// /** 13) Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin. */

// let arr = [4, 5, 7, 8, 6, 2, 9];

// function getOddMin(arr) {
//   let min = arr[0];
//   for (let i = 0; i <= arr.length; i += 2) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(getOddMin(arr));

// /** 14) Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin. */

// let arr = [4, 5, 7, 8, 6, 2, 9];

// function getEvenMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i <= arr.length; i += 2) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(getEvenMax(arr));

/** 15) Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element. */

// let lastIndex = 0;
// let arr = [4, 5, 7, 8, 6, 2, 9];

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//     lastIndex = i;
//   }
// }

// console.log(lastIndex);

// /** 16) Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin. */
// let r = 7;
// let arr = [4, 5, 7, 8, 6, 2, 9];
// let number = Math.abs(arr[0] - r);
// let result = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   let _number = Math.abs(arr[i] - r);

//   if (_number < number) {
//     number = _number;
//     result = arr[i];
//   }
// }
// console.log(result);

// /** 17) Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin. */

// let arr = [4, 5, 7, 8, 6, 2, 9];
// let max = arr[1];
// let _max = arr[0];
// let counter = arr[1] + arr[0];
// for (let i = 1; i < arr.length - 1; i++) {
//   let sum = arr[i] + arr[i + 1];
//   if (counter < sum) {
//     max = arr[i];
//     _max = arr[i + 1];
//   }
// }
// console.log({ max, _max });

// /** Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.
//  */
// let arr = [4, 5, 7, 8, 6, 2, 9, 5];
// let index1 = -1;
// let index2 = -1;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       index1 = i;
//       index2 = j;
//       break;
//     }
//   }
//   if (index1 !== -1) break;
// }

// if (index1 !== -1) {
//   console.log("Bir xil qiymatli elementlar indeksi:", index1, "va", index2);
// } else {
//   console.log("Brxl elementlar yoq");
// }

// /** 19) Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin. */

// let arr = [4, 5, 7, 5, 8, 5, 2, 7, 4, 4, 4];

// let soni = 0;
// let raqam = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   let counter = 0;

//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       counter++;
//     }
//   }

//   if (counter > soni) {
//     soni = counter;
//     raqam = arr[i];
//   }
// }

// console.log(raqam);
// console.log(soni);

// /** 20) Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin. */
// let a = [4, 5, 7, 5, 8, 5, 2, 7, 4, 4, 4];
// let b = [];
// let counter = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     b.push(a[i]);
//     counter++;
//   }
// }
// console.log(counter, b);

// /** 21) Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.*/

// let a = [4, 5, 7, 5, 8, 5, 2, 7, 4, 4, 4];
// let k = 2;

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i], a[i] * k);
// }
