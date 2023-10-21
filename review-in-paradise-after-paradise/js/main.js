// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function compareArr(myArr){
  myArr[0] < myArr[myArr.length - 1] ? alert('hi')
  :myArr[0] > myArr[myArr.length - 1] ? alert('bye')
  :alert('we close in an hour')
}
compareArr([1,2,3,4,5])
