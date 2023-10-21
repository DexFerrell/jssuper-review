//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(a,b){
  let sum = Number(a) + Number(b)
  console.log(sum)
}
subTwo(89,34)


//create a function that divides three numbers and console logs the quotient
function divThree(a,b,c){
  let quotient = Number(a/b/c)
  console.log(quotient)
}
divThree(99,11,3)

//create a function that multiplys three numbers and returns the product


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takesInThree(a,b,c){
  let remain = Number((a + b) % c)
  console.log(remain)
}
takesInThree(84,52,25)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takesInFour(a,b,c,d){
  let firstTwo = Number(a*b)
  firstTwo > 100 ? console.log(firstTwo +Number(c+d))
  : firstTwo < 100 ? console.log(firstTwo - Number(c-d))
  :alert(Number(a*b*c)% d)
}
takesInFour(5,2,10,5)