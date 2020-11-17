/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeArray = time.split(':');
  let hours=parseInt(timeArray[0]);
  let result='';
  if(hours<12){
    result="Good Morning";
  }else if(hours<12 ||  hours<17){
    result="Good Afternoon";
  }else if(hours>17){
    result="Good Evening";
  }
  return result;
}
 

/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById('greeting').innerText= msg; 
}
