//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function onlyEven(arr){
  let evenArray = []
  arr.forEach(element => {
    if (element % 2 === 0){
      evenArray.push(element)
    }
    
  });
  console.log(evenArray)
}
onlyEven([1,2,3,4,5,6,7,8,9,10])