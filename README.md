# Username-Validator-for-Social-Media
This project takes a username and checks if it's a valid username

**Username Validator (No loops, no regex, no arrays)**

This JavaScript program validates a username using only basic string operations and conditional statements, without using loops, regular expressions, or arrays.

The function `validateUsername(username)` applies a sequence of validation rules:

* Checks that the input is a string (`typeof`)
* Rejects empty strings
* Ensures the username length is between 3 and 15 characters
* Ensures the first character is a letter (not a number or symbol)
* Rejects usernames containing forbidden characters by manually checking each case using `includes()`

If any rule fails, the function returns a specific error message explaining why the username was rejected. If all rules pass, it returns an acceptance message.

The program is designed to practice step-by-step validation logic, control flow (`if` statements), and string methods, while intentionally avoiding advanced tools like loops, arrays, or regex to focus on fundamental JavaScript reasoning.
