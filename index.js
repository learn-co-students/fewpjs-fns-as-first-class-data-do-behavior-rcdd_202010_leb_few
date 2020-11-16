/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hour=time.split(":")[0];
  if(hour<=12){
    return "Good Morning";
  }
  else if(hour>17 && hour<=24){
    return "Good Evening";
  }
  else if(hour>24){
   return "Error, Enter a valid hour";
  }
  else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  const greeting = document.getElementById('greeting');
  greeting.innerText=message;
}


