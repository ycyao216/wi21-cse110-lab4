## Answers to part 1 questions
1. The value of `i` after the for loop will be printed, since var will declare function-level variable accessable after for loop code block finishes. `i` will equal to the length length of the list `price` after the for loop. If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `3` will be printed.

2. The value of `discountedPrice` will be printed, since var will declare function-level variable accessable after the for loop finishes. `discountedPrice` will the last value in `prices` after being multiplied by `1 - discount`.  If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `150` will be printed.
3. The value of `finalPrice` will be printed, since var will declare function-level variable accessable anywhere within the funciton. The value of `finalPrice` after the for loop will be the last value in `prices` after being mutiplied by `1 - discount` and rounded to 2 decimal places. If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `150` will be printed.
4. The funciton will return the array `[50,100,150]`. The function takes each value stored in `prices`, which will be `[100, 200, 300]` in this call, and multiply it by `1-discount` and round the products to 2 decimal places, which will be `[50,100,150]`.
5. An error will be raised. Since the `i` is declared through `let` within the for loop, it will not be accessable after the for loops finishes running.
6. An error will be raised. Since `discountedPrice` is declared through `let` inside the for loop, it's socpe is within the for loop, and , it will not be accessable after the for loop finishes running.
7. Since `finalPrice` is declared as a function-level variable out of the for loop code block, it will be accessable anywhere within the funciton even if it is declared using `let`. The value of `finalPrice` after the for loop will be the last value in `prices` after being mutiplied by `1 - discount` and rounded to 2 decimal places. If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `finalPrice` will have the value of `150`. However, since code on line 11 caused an error, line 13 will not be executed. If line 13 is to be executed, the value of `finalPrice`, which is `150` will be printed. 
8. If we consider the error happening before the `return` statement, the function will not return anything, since the script will stop executing before returning. If we do not consider the errors happeneing before the `return` statement, then the value of `discounted` will be returned. `discounted` will contain each value stored in `prices`, which will be `[100, 200, 300]` in this call, mutiplied by `1-discount` and round it to 2 decimal places. So `[50, 100, 150]` will be returned.
9.  An error will be raised. Since `i` is declared through `let` inside the for loop, it's socpe is within the for loop, and it will not be accessable after the for loop finishes running.
10. Assuming that line 7 does not raise the error of modifying a constant. An error will still be raised at line 12, an error will be raised. Since `discountedPrice` is declared through `const` inside the for loop, it's socpe is within the for loop, and it will not be accessable after the for loop finishes running.
11. Modifying const variable at line 7 will raise an error. Assume the assignment is successful, then the value of `finalPrice` will be printed out, since it is declared within the function but outside of any blocks in the funciton, so it will be accessable anywhere inside the function. 
12. The exact value to be returned will be unknown, since errors will be raised before the return statement. If all assignments are successful, the funciton will return the vales in `discounted`, since discounted is declared using `const` but is insde the function but outside of any blocks in the function, so it will be accessable anywhere inside the function. 
13. Notations:
    * a. `student[name];`
    * b. `student["Grad Year"];`
    * c. `student.greeting();`
    * d. `student["Favorite Teacher"].name;`
    * e. `student.courseLoad[0]`
14. Arithmetic:
    * '3'+2 outputs '32'. This is because `+` is interpreted as the string concatenation operator since a string `3` presents.
    * '3'-2 outputs 1. This is because `-` is purely an arthimatic operation, so `3` is converted to a number and `3-2` is evaluated.
    * 3 + null outputs 3. Since `null` is not a string, `+` will not be treated as an arithmetic, so `null` will be converted to `0`, and `3+0` will be evaluated.
    * '3' + null outputs '3null'. Since `'3'` is a string, `+` is treated as the string concatenation operator, so `null` is converted to the string `'null'`, and concatenation `'3' + 'null'` is executed.
    * true + 3 outputs 4. Since there is no string, `+` is treated as an arithmatic operator, so `true` is converted to number `1`, and `1 + 3` is executed.
    * false + null outputs 0. Since there is no string, `+` is treated as an arithmatic operator, so `false` is converted to number `0`, and `null` is also converted to number `0`. Then `0+0` is executed.
    * "3" + undefined outputs '3undefined'. Since `"3"` is a string, `+` is treated as the string concatenation operator, so `undefined` is converted to the string `"undefined"`, and the concatenation `"3" + "undefined"` is executed.
    * "3" - undefined outputs NaN. Sine `-` is purely an arithmetic operator, `"3"` will be converted to the number `3`. However, `undefined` cannot be converted to a number, so it will be converted to `NaN`. And then `3 + NaN` will be evaluated, leading to again `NaN`.
15. Comparison:
    * '2' > 1 outputs true. Since the values are of different types, both values will be converted to numbers, so `'2'` will be converted to `2`, and `1` is already a number. Since `2 > 1` is true, the output is true.
    * '2' < 12 outputs true. Since the values are of different types, both values will be converted to numbers, so `'2'` will be converted to `2`, and `12` is already a number. Since `2 < 12` is true, the output is true.
    * 2 == '2' outputs true. Since the values are of different types, both values will be converted to numbers by `==`, so `'2'` will be converted to `2`, and `2` is already a number. Since for two numbers `2 == 2` is true, the output is true.
    * 2 === '2' outputs false. The `===` operator will not convert different types to number, and if the types are different, a false will directly be the result. Since `2` is a number and `'2'` is a string, the output will immediately be false. 
    * true == 2 outputs false. Since the values are of different types, both values will be converted to numbers by `==`, so `true` will be converted to `1`, and `2` is already a number. Since for two numbers `2 == 1` is false, the output is false.
    * true === Boolean(2) outputs true. By explicitly converting `2` to a boolean, since `2` is not `0`, `Boolean(2)` will be converted to `true`. Now both sides has the same type of boolean, and since both sides has the value of `true`, the output will be true.
16. `==` compares the values of the operands and returns `true` if the values are equal; returns `false` otherwise. Operands of different types will be converted to numbers before being compared, so `==` may return `true` for operands of different types. `===` also compares the values of operands but without converting operands of different types to numbers. So `===` will only return `false` when the types of the two operands are not the same.
17. The output will be the string: `How are you?`. This is because that `2 == true` is false, so `console.log('Hello!')` is not executed. Since `2` is true as a boolean value, `console.log('How are you?')` will be executed, so `How are you?` will be printed. Then since the condition is met for the `else if (2)` block, the `else` block will not be executed.
18. Anser in [part1-question18.js](part1-question18.js)
19. The result will be: `[6,8,10]`. After the function call of `modifyArray([1,2,3],doSomething)`, a new constant array`newArr` is made. And then each element of `[1,2,3]` are feed in as the first argument of `doSomething` and `function(x) {return x*2}` is used as the second argument. Based on the declaration of `doSomething`, each element in `[1,2,3]` will be added by 2 and then feed in `function(x) {return x*2}`, which will multiply them by 2. Thus, for `1`, (1+2)*2 = 3; for `2`, (2+2)*2 = 8; for `3`, (2+3)*2 = 10. After `doSomething` finishes the execution, each value returned by `doSometing` will be added to `newArr`, so at the end of the for loop, `newArr` will contain `[6,8,10]`. Since `newArr` is eventually returned, the returned value of `modifyArray([1,2,3],doSomething)` will be `[6,8,10]`
20. Answer is in [part1-question20.js](part1-question20.js)
21. The output will be: 
    ``` 
    1 
    4 
    3 
    2
    ```
    This is because `console.log(1);` is executed first since its line number is the smallest; 1 is printed first. Then `console.log(4);` is executed since it does not need to be delayed; 4 is printed next. Finally, among the two delayed function calls, `function() {console.log(3);}` only has a delay of 0 miliseconds, while `function() {console.log(2);}` has a delay of 1000 milisecond, so 2 will be printed after 3. This leads to the order of `1 4 3 2`.