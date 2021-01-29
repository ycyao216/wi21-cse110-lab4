## Answers to part 1 questions
1. The value of `i` after the for loop will be printed at line 11, since `var` will declare function-level variable accessable after for loop code block finishes. 

    `i` will equal to the length length of the list `price` after the for loop. If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `3` will be printed.

2. The value of `discountedPrice` will be printed at line 12, since `var` will declare function-level variable accessable after the for loop finishes. 

    `discountedPrice` will be the last value in `prices` after being multiplied by `1 - discount`.  If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `150` will be printed.
3. The value of `finalPrice` will be printed at line 13, since `var` will declare function-level variable accessable anywhere within the funciton. 
   
   The value of `finalPrice` after the for loop will be the last value in `prices` after being mutiplied by `1 - discount` and rounded to 2 decimal places. If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `150` will be printed.

4. The funciton will return the array `[50,100,150]`, since discounted is declared through `var` and is accessable anywhere within the function. 

    The function takes each value stored in `prices`, which will be `[100, 200, 300]` in this call, and multiply it by `1-discount` and round the products to 2 decimal places to store in `discounted` array, which will be `[50,100,150]`. `discounted` is returned.
---
5. An error will be raised for invalid access at line 11. Since the `i` is declared through `let` within the for loop, it will only be accessable from within the for loop. It will not be accessable after the for loops finishes running at line 11.
6. An error will be raised for invalid access at line 12. Since `discountedPrice` is declared through `let` inside the for loop, it's socpe is within the for loop, and , it will not be accessable after the for loop finishes running at line 12.
7. The value of `finalPrice` will be printed at line 13. Since `finalPrice` is declared as a function-level variable out of the for loop code block, it will be accessable anywhere within the funciton even if it is declared using `let`. 
   
   The value of `finalPrice` after the for loop will be the last value in `prices` after being mutiplied by `1 - discount` and rounded to 2 decimal places. If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `finalPrice` will have the value of `150`, which will be printed. 

8. Assuming all previous assignments are successful without errors, then the value of `discounted` will be returned since it is declared as a function-level variable in the outer most block of the function. It will be accessable anywhere within the function.
   
   `discounted` will contain each value stored in `prices`, which will be `[100, 200, 300]` in this call, mutiplied by `1-discount` and round it to 2 decimal places. So `[50, 100, 150]` will be returned.
---
9.  An error will be raised at line 11. Since `i` is declared through `let` inside the for loop, it's socpe is within the for loop, and it will not be accessable after the for loop finishes running.
10. Assume that line 7 does not raise an error for modifying a constant. However, an error will still be raised at line 12 for invalid access. Since `discountedPrice` is declared through `const` inside the for loop, it's socpe is within the for loop, and it will not be accessable after the for loop finishes running.
11. Assume the assignment is successful, then the value of `finalPrice` will be printed out at line 13, since it is declared within the function but outside of any blocks in the funciton, so it will be accessable anywhere inside the function. 

    Since finalPrice is a declared using `const`, it cannot be modified, so line 7 will cause an error for re-assigning valeus to constant. Assume that error does not happen and `finalPrice` can be successfully re-assigned, then the value of `finalPrice` after the for loop will be the last value in `prices` after being mutiplied by `1 - discount` and rounded to 2 decimal places. If the function is called through `discountPrices([100, 200, 300], .5)`, for example, then `finalPrice` will have the value of `150`, which will be printed. 

12. If all assignments are successful, the funciton will return the vales in `discounted`, since discounted is declared using `const` in the outer-most block in the function, so it will be accessable anywhere inside the function. In addition, even though the array is declared using `const`, elements can still be added to it; it just cannot be re-assigned.
    
    Assume all the assignments are successful, then `discounted` will contain each value stored in `prices`, which will be `[100, 200, 300]` in this call, mutiplied by `1-discount` and round it to 2 decimal places. So `[50, 100, 150]` will be returned as usual. 
---

1.  Notations:
    * a. `student[name];`
    * b. `student["Grad Year"];`
    * c. `student.greeting();`
    * d. `student["Favorite Teacher"].name;`
    * e. `student.courseLoad[0]`
---
14. Arithmetic:
    * '3'+2 outputs '32'. 
        
        This is because `+` is interpreted as the string concatenation operator since a string `3` presents.
    * '3'-2 outputs 1. 
  
        This is because `-` is purely an arthimatic operation, so `3` is converted to a number and `3-2` is evaluated.
    * 3 + null outputs 3. 
  
        Since `null` is not a string, `+` will not be treated as an arithmetic, so `null` will be converted to `0`, and `3+0` will be evaluated.
    * '3' + null outputs '3null'. 
        
        Since `'3'` is a string, `+` is treated as the string concatenation operator, so `null` is converted to the string `'null'`, and concatenation `'3' + 'null'` is executed.
    * true + 3 outputs 4. 
  
        Since there is no string, `+` is treated as an arithmatic operator, so `true` is converted to number `1`, and `1 + 3` is executed.
    * false + null outputs 0. 
    
        Since there is no string, `+` is treated as an arithmatic operator, so `false` is converted to number `0`, and `null` is also converted to number `0`. Then `0+0` is executed.
    * "3" + undefined outputs '3undefined'. 
  
        Since `"3"` is a string, `+` is treated as the string concatenation operator, so `undefined` is converted to the string `"undefined"`, and the concatenation `"3" + "undefined"` is executed.
    * "3" - undefined outputs NaN. 
  
        Sine `-` is purely an arithmetic operator, `"3"` will be converted to the number `3`. However, `undefined` cannot be converted to a number, so it will be converted to `NaN`. And then `3 + NaN` will be evaluated, leading to again `NaN`.
15. Comparison:
    * '2' > 1 outputs true. 
  
        Since the values are of different types, both values will be converted to numbers, so `'2'` will be converted to `2`, and `1` is already a number. Since `2 > 1` is true, the output is true.
    * '2' < 12 outputs true. 
  
        Since the values are of different types, both values will be converted to numbers, so `'2'` will be converted to `2`, and `12` is already a number. Since `2 < 12` is true, the output is true.
    * 2 == '2' outputs true. 

        Since the values are of different types, both values will be converted to numbers by `==`, so `'2'` will be converted to `2`, and `2` is already a number. Since for two numbers `2 == 2` is true, the output is true.
    * 2 === '2' outputs false. 
  
        The `===` operator will not convert different types to number, and if the types are different, a false will directly be the result. Since `2` is a number and `'2'` is a string, the output will immediately be false. 
    * true == 2 outputs false. 
  
        Since the values are of different types, both values will be converted to numbers by `==`, so `true` will be converted to `1`, and `2` is already a number. Since for two numbers `2 == 1` is false, the output is false.
    * true === Boolean(2) outputs true. 

        By explicitly converting `2` to a boolean, since `2` is not `0`, `Boolean(2)` will be converted to `true`. Now both sides has the same type of boolean, and since both sides has the value of `true`, the output will be true.

16. `==` compares the values of the operands and returns `true` if the values are equal; returns `false` otherwise. Operands of different types will be converted to numbers before being compared, so `==` may return `true` for operands of different types. `===` also compares the values of operands but without converting operands of different types to numbers. So `===` will only return `false` when the types of the two operands are not the same.
---
17. The output will be the string: `How are you?`. This is because that `2 == true` is false, so `console.log('Hello!')` is not executed. Since `2` is true as a boolean value, `console.log('How are you?')` will be executed, so `How are you?` will be printed. Then since the condition is met for the `else if (2)` block, the `else` block will not be executed.
---
18. Answer in [part1-question18.js](part1-question18.js)
---
19. The result will be: `[6,8,10]`. After the function call of `modifyArray([1,2,3],doSomething)`, a new constant array `newArr` is made. And then each element of `[1,2,3]` are feed in as the first argument of `doSomething` and `function(x) {return x*2}` is used as the callback function argument. Based on the declaration of `doSomething`, each element in `[1,2,3]` will be added by 2 and then feed to the callback `function(x) {return x*2}`, which will multiply them by 2. Thus, for `1`, (1+2)*2 = 3; for `2`, (2+2)*2 = 8; for `3`, (2+3)*2 = 10. After `doSomething` finishes the execution, each value returned by `doSometing` will be added to `newArr`, so at the end of the for loop, `newArr` will contain `[6,8,10]`. Since `newArr` is eventually returned, the returned value of `modifyArray([1,2,3],doSomething)` will be `[6,8,10]`
---
20. Answer is in [part1-question20.js](part1-question20.js)
21. The output will be: 
    ``` 
    1 
    4 
    3 
    2
    ```
    This is liekly because `console.log(1);` is executed first since its line number is the smallest; 1 is printed first. Then `console.log(4);` is executed since it does not need to be delayed; 4 is printed next. Finally, among the two delayed function calls, `function() {console.log(3);}` only has a delay of 0 miliseconds, while `function() {console.log(2);}` has a delay of 1000 milisecond, so 2 will be printed after 3. This leads to the order of `1 4 3 2`.