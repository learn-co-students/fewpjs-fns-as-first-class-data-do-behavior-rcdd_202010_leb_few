/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementationof greet() */
//let hours= ' '+ ':'+ ' ';
//let nb = Number(hours);
const greets = ["Good Morning","Good Afternoon","Good Evening"];
function greet(hours){
  let hour = parseInt(hours,10)
  if(hour < 12){
  return greets[0];}
  else 
  if(hour >= 12 && hour<=17){
  return greets[1];}
  else if(hour>17)
  return greets[2];
}
/* Write your implementation of displayMessage() */

 function displayMessage(message){
   document.getElementById('greeting').innerText =message;
   
   
 }