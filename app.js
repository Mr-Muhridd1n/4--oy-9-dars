/**1) Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
Input: getInitialOdds(5)
Output: [1, 3, 5, 7, 9]
 */

// function getInitialOdds(n) {
//   let arr = [];
//   for (let i = 1; arr.length < n; i++) {
//     if (i % 2 !== 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getInitialOdds(5));

/** 2)Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
Input: [4, 5, 7, 8, 6, 9]
Output: [6, 8, 4]
 */

// let arr = [4, 5, 7, 8, 6, 9];

// function getEvenReverse(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(getEvenReverse(arr));

/** Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
Input:  [4, 5, 7, 8, 6, 9]
Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4
 */

// let numbers = [4, 5, 7, 8, 6, 9];
// let result = "";
// for (let i = 0; i < numbers.length; i++) {
//   result += `${numbers[i]}, ${numbers[numbers.length - 1 - i]}, `;
// }
// console.log(result);

/**4) Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
Input: arr = [1, 6, 9, 5, 8, 10, 15];
Ouput: rangeSum(arr, 2, 5) => 32
 */
// let arr = [1, 6, 9, 5, 8, 10, 15];

// function rangeSum(arr, k, l) {
//   let counter = 0;
//   for (let key of arr) {
//     if (0 <= k && k <= l && l < arr[key]) {
//       counter += arr[key];
//     }
//   }
//   return counter;
// }
// console.log(rangeSum(arr, 2, 5));

/** 6) Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
Input: [7, 4, 9, 2, 3, 1, 5]
Output:
Max: 9
Min: 1
[7, 4, 1, 2, 3, 9, 5]
 */

let arr = [7, 4, 9, 2, 3, 1, 5];
let max = 1;
let min = 2;
for (let key of arr) {
  if (max < arr[key]) {
    max = arr[key];
  } else if (min > arr[key]) {
    min = arr[key];
  }
}
console.log(max, min);
