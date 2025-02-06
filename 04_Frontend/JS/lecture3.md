# Table of Contents  
1. **Printing in JavaScript**  
   - `console.log()`  
   - `console.warn()`  
   - `console.error()`  
   - Important points about console methods  

2. **Comments in JavaScript**  
   - Single-line comments  
   - Multi-line comments  

3. **Data Types in JavaScript**  
   - String  
   - Number  
   - Boolean  
   - BigInt  
   - Object  
   - Array  
   - Symbol  

 4. **Variables in JavaScript**  

JavaScript provides three ways to declare variables:  

- `var` (Old way, function-scoped)  
- `let` (Block-scoped, introduced in ES6)  
- `const` (Block-scoped, immutable) 

---

**var**  
- The oldest way to declare variables in JavaScript.  
- It is **function-scoped**, meaning it is available inside the function where it is declared.  
- It **does not** have block scope, which means it is accessible outside `{}` blocks.  
- It can be **redeclared** and **updated**.  

#### Example:  
```js
var name = "Alice";
console.log(name); // Alice

var name = "Bob"; // Redeclaration allowed
console.log(name); // Bob
```

**let**
- Introduced in ES6 **(2015)**.
- It is block-scoped, meaning it is only accessible within {} where it is defined.
- It can be updated but cannot be redeclared in the same scope.

#### Example:  
```js
let age = 28;
age = 26; // Allowed (Updating)
console.log(age); // 26

let age = 30; // Error: Cannot redeclare variable in the same scope
```

**const**

- Also introduced in ES6.
-  It is block-scoped like let.
-  It must be assigned a value when declared.
-  It cannot be updated or redeclared.
- However, objects and arrays declared with const can have their properties modified.

#### Example:  
```js
const country = "US";
country = "Canada"; // Error: Assignment to constant variable
```