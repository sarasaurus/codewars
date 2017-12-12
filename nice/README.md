A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

https://www.codewars.com/kata/59b844528bcb7735560000a0

we white boarded and developed a solution for what turned out to be an erroneous conception of the problem.
having to refactor our base idea at 7pm was challenge, but luckily both apporaches relied on creating a var the stored a boolen which could be switched true or false depending on the outcome of our for loops, so it was just a matter of changing the condition in our if statement, but much of the problem was the same.

we had been using the array.find method and basically the new understanding of the kata meant that we switched to the .include method instead. 