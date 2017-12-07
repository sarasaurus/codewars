
Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

https://www.codewars.com/kata/insert-dashes/train/javascript

sstarted by whiteboarding the steps, the went about breaking the number into a string and then an array.  We then took each value of the array and ran a % 2 modulo operation.. sounds like it returns the remainder if you divide by two, so 0 or 1... pushed that to an array.  Then we created a for loop that checked if the first value in the odd numbers array was equal to the second and also odd, if that was true then we got a number from the number array and addded a dash and pushed the result to a new array, final array.  finally we took the final around and put it back into a string using join.


