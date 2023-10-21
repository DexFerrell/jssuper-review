//Create a conditonal that checks their age
let age
//If under 16, tell them they can not drive
age <16 ? 'Cant drive' 
//If under 18, tell them they can't hate from outside the club, because they can't even get in
:age < 18 ? "cant get in the club"
//If under 21, tell them they can not drink
:age < 21 ? 'cant drink'
//If under 25, tell them they can not rent cars affordably
:age< 25 ? 'cannot rent'
//If under 30, tell them they can not rent fancy cars affordably
:age < 30 ? 'cannot rent affordibly'
//If under over 30, tell them there is nothing left to look forward too
:'No more big milestones'


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', checker)
const p = document.querySelector('p')
function checker() {
let age = Number(document.querySelector('input').value)
 age < 16 ? p.innerText ='Cant drive' 
  :age < 18 ? p.innerText ="cant get in the club"
  :age < 21 ? p.innerText ='cant drink'
  :age < 25 ? p.innerText ='cannot rent'
  :age < 30 ? p.innerText ='cannot rent affordibly'
  : p.innerText ='No more big milestones';
}