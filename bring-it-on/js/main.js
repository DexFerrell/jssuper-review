// *Variables*
// Create a variable and console log the value
let vari = 21
console.log(vari)
// Create a variable, add 10 to it, and alert the value
let add10 = 4
add10 += 10
alert(add10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4Nums(a,b,c,d){
  let glitch = Number(a - b - c - d)
  alert(glitch)
}

// Create a function that divides one number by another and returns the remainder
function modulus(a,b){
  let result = Number(a%b)
  return result
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add2comp(a,b){
  let sum = Number(a+b)
  sum>50 ? alert('jumanji')
  : alert('less than 50')
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
