// Task 1: Sum of First N Natural Numbers
function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfN(6));


// Task 2: Multiplication Table (Without Using an Array)
function printMultiplicationTable(n) {
  let i = 1;
  while (i <= 10) {
    console.log(n + " * " + i + " = " + n * i);
    i++;
  }
}

printMultiplicationTable(2);

// Task 3: Count Vowels in a String
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("AaMna"));
