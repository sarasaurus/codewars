Write a simple regex to validate a username.

Allowed characters are:

-lowercase letters -numbers -underscore

length shoould be between 4 and 16 characters.  

https://www.codewars.com/kata/simple-validation-of-a-username-with-regex

used regex101 to play around with checking for certain characters, I got stuck on how to check for length, I googled for that found a solution, tested it in regex and then struggled to deal with the \s character and the Hass testname.  the resource I found for string length, had the solution for both in front of my nose... took talking with classmates to realize it though.  Need to tell the function to start looking : ^ and to stop looking $ once I got those, the solution worked!