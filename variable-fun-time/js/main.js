//--- Easy
//create a variable and assign it a number
let dex = 39

//minus 10 from that number
dexMinus = dex - 10

//print that number to the console
console.log(dexMinus)

//--- Medium
//create a variable that holds a value from the input
document.querySelector('h1').addEventListener('click',grab)
let more
function grab(){
  let grahhh = Number(document.querySelector('input').value)
//add 25 to that number
  grahhh +=25
//alert that number
 alert(grahhh)
 more = grahhh
}


//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', twoPrev)
function twoPrev() {
  let final = Number(more) + Number(dexMinus)
  console.log(more)
  console.log(final)
}

